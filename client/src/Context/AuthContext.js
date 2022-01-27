import { useReducer } from "react";
import { createContext } from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user:null
        // _id:"61f556f2951f2da7825da06e",
        // username:"Carlos Gonzales",
        // email:"carlosgonzales@email.com",
        // profilePicture:"https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        // coverPicture:"https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        // followers:[],
        // following:['61f555f3951f2da7825da06a'],
        // isAdmin:false
    ,
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