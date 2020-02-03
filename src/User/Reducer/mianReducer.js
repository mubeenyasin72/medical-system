import {AddUser,LoginSuccess, LoginFalse,SEND_EMAIL_F,SEND_CODE,GET_EMAIL,CHANGE_PASSWORD} from '../Actions/actionsType';
import history from '../../Routing/history';
const state={
    user:{
            firstName:"",lastName:"",email:"",password:""
         },
    singupMsg:"",
    loginfail:"",
    loginSuccess:"",
    signUpSuc:"",
    userSendEmail:"",
    UserCode:"",
    getEmail:"",
    changePassword:""

}


function mainReducer (mState = {...state},action){
    switch(action.type){
        case AddUser:
            if(action.payload === null || action.payload === undefined){
                
            }else{
                mState.user = action.payload;
                mState.singupMsg = action.payload.msg;
                mState.signUpSuc = action.payload.success;
                
            }
            return deepCopy(mState);
        case LoginSuccess:
            if(action.payload === null || action.payload === undefined){

            }else{
                history.push('/User/Profile')
                mState.loginSuccess=action.payload.success;
            }
            return deepCopy(mState);
        case LoginFalse:
            if(action.payload === null || action.payload === undefined){

            }else{
                mState.loginfail=action.payload.msg;
                // console.log(mState.loginfail,"Login Fail Message");
            }
            return deepCopy(mState);
            case SEND_EMAIL_F:
                if(action.payload === null || action.payload === undefined){

                }else{
                    mState.userSendEmail = action.payload;
                    // console.log(mState.userSendEmail,"This Is Data In The Reducer "); 
                }
                return deepCopy(mState);
            case SEND_CODE:
                if(action.payload === null || action.payload === undefined){

                }else{
                    mState.UserCode = action.payload;
                    // console.log(mState.UserCode,"This is the User Code In Reducer");
                }
                return deepCopy(mState);
            case GET_EMAIL:
                if(action.payload === null || action.payload === undefined){

                }else{
                    mState.getEmail = action.payload
                }
                return deepCopy(mState);
            case CHANGE_PASSWORD:
                if(action.payload === null || action.payload === undefined){

                }else{
                    mState.changePassword = action.payload;
                    console.log(mState.changePassword,"This Is Change Password In The Reducer");
                }
                return deepCopy(mState);
        default:
            return deepCopy(mState);
    }
}


const deepCopy =obj =>{
    const newObj = JSON.parse(JSON.stringify(obj));
    return newObj;
}

export default mainReducer;