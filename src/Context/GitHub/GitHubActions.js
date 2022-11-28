import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GIT_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GIT_TOKEN;

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    },
})

export const fetchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text,
    })

    const response = await github.get(`/search/users?${params}`);
    return response.data.items;
}

export const getUser = async (login) => {
    const reposparams = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })
    const [userresponse, reposresponse] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${reposparams}`)
    ]).catch((reason) => {
        if(reason.response.status === 404){
            window.location = '/missing'
        }
    });
    return { user: userresponse.data, repos: reposresponse.data }
}

export const fetchRepo = async (login, repo) => {

    const response = await github.get(`/repos/${login}/${repo}`).catch((reason) => {
        if(reason.response.status === 404){
            window.location = '/missing'
        }
    });
    return response.data;

}