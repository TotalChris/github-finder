import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const initState = null;

    const [state, dispatch] = useReducer(AlertReducer, initState);

    const setAlert = (message, type) => {
        dispatch({type: "POST_ALERT", payload: {message, type}});
        setTimeout(() => dispatch({type: "REMOVE_ALERT"}), 3000);
    }

    return (
        <AlertContext.Provider value={{alert: state, setAlert}}>
        {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;