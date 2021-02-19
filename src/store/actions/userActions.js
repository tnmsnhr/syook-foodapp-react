import * as actionTypes from './actionTypes';

const loginStart=()=>{
    return{
        type:actionTypes.LOGIN_START
    }
}

const loginSuccess=userData=>{
    return{
        type:actionTypes.LOGIN_SUCCESS,
        userData
    }
}

const loginFail=userData=>{
    return{
        type:actionTypes.LOGIN_FAIL
    }
}

export const login=(username,password)=>{

    return dispatch=>{
        dispatch(loginStart)

        const userData=JSON.parse(localStorage.getItem('users')).filter(item=>{
            return item.username==username && item.password==password
        })[0]

        if(!userData){
            dispatch(loginFail())
        }else {
            dispatch(loginSuccess(userData))
            localStorage.setItem('user',JSON.stringify({username,password}))
        }
        
    }
}