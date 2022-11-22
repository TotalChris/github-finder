import { createContext, useReducer } from "react";
import GitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GIT_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GIT_TOKEN;

export const GitHubProvider = ({children}) => {

    const initState = {users: [], loading: false, currentUser: {}, currentRepo: {}, repos: [] }

    const [state, dispatch] = useReducer(GitHubReducer, initState);

    const fetchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text,
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    const fetchUserRepos = async (login) => {
        setLoading();

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json();

        dispatch({
            type: 'GET_USERREPOS',
            payload: data,
        })
    }

    const fetchUserProfile = async (login) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if(response.status === 404) {
            window.location = '/missing';
        } else {
            const data = await response.json();

            dispatch({
                type: 'GET_USERPROFILE',
                payload: data,
            })
        }
    }

    const fetchRepo = async (login, repo) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/repos/${login}/${repo}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if(response.status === 404) {
            window.location = '/missing';
        } else {
            const data = await response.json();
            dispatch({
                type: 'GET_REPO',
                payload: data,
            })
        }
    }

    const setLoading = () => {
        dispatch({type: "SET_LOADING"});
    }

    const clearUsers = () => {
        dispatch({type: "CLEAR_USERS"});
    }

    return (
        <GitHubContext.Provider value={{ users: state.users, loading: state.loading, repos: state.repos, currentUser: state.currentUser, currentRepo: state.currentRepo, fetchRepo, fetchUsers, fetchUserProfile, fetchUserRepos, clearUsers }}>
            {children}
        </GitHubContext.Provider>
        )
}

export default GitHubContext;
