const AuthReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_START':
            return {
                user: null,
                isFetching: true,
                console: false
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                console: false
            };
            case 'LOGIN_FAILURE':
                return {
                    user: null,
                    isFetching: false,
                    console: action.payload
                };
        default: 
            return state;
    }
}

export default AuthReducer;