const GitHubReducer = (state, action) => {
    switch (action.type){
        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            }
        case "CLEAR_USERS":
            return {
                ...state,
                users: [],
            }
        case "GET_USERPROFILE":
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
            }
        case "GET_USERREPOS":
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
        case "GET_REPO":
            return {
                ...state,
                currentRepo: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default GitHubReducer;