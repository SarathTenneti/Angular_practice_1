let initialState = {
    name: "",
    email: "",
    mobile: ""
}

// Here dispatch function has an object as one of the input parameters
// This reducer function is called by NgRx internally after dispatch function
// dispatch({type: , payload})
// dispatch({type: 'name-edit', payload})

export function userReducer(state = initialState, action: any) {

    switch (action.type) {
        case 'name-edit':
            return {
                ...state,
                name: action.payload,
            };
        case 'email-edit':
            return {
                ...state,
                email: action.payload,
            };
        case 'mobile-edit':
            return {
                ...state,
                mobile: action.payload,
            };
        default:
            return state;
    }

}