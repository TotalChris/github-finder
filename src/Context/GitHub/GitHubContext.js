import { createContext, useReducer } from "react";
import GitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

export const GitHubProvider = ({children}) => {

    const initState = {users: [], loading: false, currentUser: {}, currentRepo: {}, repos: [] }

    const [state, dispatch] = useReducer(GitHubReducer, initState);

    return (
        <GitHubContext.Provider value={{ 
            ...state,
            dispatch,
        }}>
            {children}
        </GitHubContext.Provider>
        )
}

export default GitHubContext;
