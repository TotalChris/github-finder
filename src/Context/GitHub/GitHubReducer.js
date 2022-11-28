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
        case "GET_USERDATA":
            return {
                ...state,
                currentUser: action.payload.user,
                repos: action.payload.repos,
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