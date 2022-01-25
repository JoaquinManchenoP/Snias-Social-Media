import { useReducer } from "react";
import { createContext } from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
    _id:"61e820fab01efd3e5d0ec949",
    username:"Joaquin",
    email:"joaquin@email.com",
    profilePicture:"",
    coverPicture:"",
    followers:Array,
    following:Array,
    isAdmin:false
    },
    isFetching: false,
    errror:false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider 
        value = {{
            user:state.user, 
            isFetching:state.isFetching, 
            error:state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}