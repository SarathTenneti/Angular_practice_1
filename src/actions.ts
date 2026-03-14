import {createAction , props} from "@ngrx/store"; 
   
   
//sending object in create action function
//props having type as an object
export const updateName=createAction('name-edit',props<{name:string}>())
export const updateEmail=createAction('email-edit',props<{email:string}>())
export const updateMobile=createAction('mobile-edit',props<{mobile:number}>())



//createAction(type,props)


// export function updateName(name : any){

//     return{
//         type:"name-edit",
//         payload : name
//     }//this is called action creator
// }


// export function updateMobile(name : any){

//     return{
//         type:"mobile-edit",
//         payload : name
//     }
// }


// export function updateEmail(name : any){

//     return{
//         type:"email-edit",
//         payload : name
//     }
// }
// //create action , create reducer

