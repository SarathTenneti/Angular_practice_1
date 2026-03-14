import {createReducer, on} from '@ngrx/store';
import {updateMobile , updateName, updateEmail} from '../actions';

let initialState = {
    name: "",
    email: "",
    mobile: 0
}

// Here dispatch function has an object as one of the input parameters
// This reducer function is called by NgRx internally after dispatch function
// dispatch({type: , payload})
// dispatch({type: 'name-edit', payload})

// export function userReducer(state = initialState, action: any) {

//     switch (action.type) {
//         case 'name-edit':
//             return {
//                 ...state,
//                 name: action.payload,
//             };
//         case 'email-edit':
//             return {
//                 ...state,
//                 email: action.payload,
//             };
//         case 'mobile-edit':
//             return {
//                 ...state,
//                 mobile: action.payload,
//             };
//         default:
//             return state;
//     }

// }


export let userReducer = createReducer(  
  initialState,
  //on(action , code for manipulating the data)  
  on(updateName, (state, {name}) => ({
    ...state,
    name: name
  })),
  on(updateEmail, (state ,{email} )=> ({
    ...state,
    email : email
  })),
  on(updateMobile , (state , data )=>({
    ...state,
    mobile : data.mobile
  }))
);

