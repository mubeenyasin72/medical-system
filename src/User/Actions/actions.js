import {AddUser,LoginFalse,LoginSuccess,SEND_EMAIL_F,SEND_CODE,GET_EMAIL,CHANGE_PASSWORD} from './actionsType';
import axios from 'axios';
import history from '../../Routing/history';
export const addUserFunction =(user,ctrl) => dispatch =>{
    console.log({user},"Action Data signup");

    axios.post("https://multivendoor.herokuapp.com/user/auth/signup-user", {user}).then(response=>{
        console.log(response.data.success,"This The the response of Api SignUP User");
        if(response.data.success === true){
            dispatch({
                type:AddUser,
                payload:response.data
            })
            
        }
        ctrl.setState({loading:false});
        ctrl.setState({
            fname:"",
            lname:"",
            email:"",
            password:""
        })
        history.push('/User/Login')
       
    }).catch(error=>{
        console.log(error);
        ctrl.setState({loading:false});
    })
}
export const loginUserFunction = (user,ctrl)=>dispatch=>{
    axios.post("https://multivendoor.herokuapp.com/user/auth/login-user",{user}).then(response=>{
        console.log(response.data,"This Login in Actions Data");
        if(response.data.success === true){
            dispatch({
                type:LoginSuccess,
                payload:response.data
            })
            
        }
        else {
            dispatch({
                type:LoginFalse,
                payload:response.data
            })
        }
        ctrl.setState({loading:false});
        ctrl.setState({
            email:"",
            password:""
        })
        
    }).catch(error=>{
        console.log(error);
        ctrl.setState({loading:false});
    })

}

export const userSendEmailAction = (email,ctrl)=>dispatch=>{
    axios.post('https://multivendoor.herokuapp.com/user/auth/forget-pass-send-email',{email}).then(response=>{
        console.log(response.data,"This Is Forget Password 1st Page");
        if(response.data.success === true){
            dispatch({
                type:SEND_EMAIL_F,
                payload:response.data
            })
            
        }
        history.push('/User/Send_Code')
        ctrl.setState({
            loading:false
        })
        ctrl.setState({
            email:""
        })
    }).catch(error=>{
        console.log(error);
        ctrl.setState({
            loading:false
        })
    })

}
export const userSendCodeAction = (user) => dispatch=>{
    axios.post('https://multivendoor.herokuapp.com/user/auth/forget-pass-code-match-user',{user}).then(response=>{
        console.log(response.data,"This Is Send Code 2nd Page");
        if(response.data.success === true){
            dispatch({
                type:SEND_CODE,
                payload:response.data
            })
            
        }
        history.push('/User/Change_Password')
    })
}
export const getEmailAction = email => dispatch=>{
    dispatch({
        type:GET_EMAIL,
        payload:email
    })
}
export const changePasswordActions = (user) => dispatch=>{
    axios.post('https://multivendoor.herokuapp.com/user/auth/add-new-password-user',{user}).then(response=>{
        console.log(response.data,"This Is Send Code 2nd Page");
        if(response.data.success === true){
            dispatch({
                type:CHANGE_PASSWORD,
                payload:response.data
            })
            
        }
        history.push('/User/Login');
    })
}
