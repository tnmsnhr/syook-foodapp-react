import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';
import googleImage from '../../images/google.png';
import logo from '../../images/logo.png';
import {connect} from 'react-redux';
import {login} from '../../store/actions/userActions';

const LoginForm = props => {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')


    const loginFormHandler =e=>{
        e.preventDefault()
        props.onLogin(username,password)
        console.log(props.loginSuccess)
        if(props.loginSuccess){
            props.history.push('/home/profile')
        }
        
    }

    const inputChangeHandler=setter=>event=>{
        setter(event.currentTarget.value)
    }

    return (
        <div className="loginform__container">
            <div className="loginform__upperrow margin-bottom-lg">
                <div className="loginform__brand margin-bottom-lg">
                    <img src={logo}/>
                    <p>Vote<span>App</span></p>
                </div>
                <div className="loginform__heading margin-bottom-lg">
                    <h1>Welcome Back</h1>
                </div>
                <div className="google-signin margin-bottom-lg">
                    <div className="google-signin__button btn btn-white btn-full">
                        <img src={googleImage}/>
                        <h3>Log in with Google</h3>
                    </div>
                </div>
            </div>

            <div className="loginform__bottomrow margin-top-lg">
                <form onSubmit={loginFormHandler}>
                    <div className="form__input--group margin-bottom-md">
                        <div className="form__group">
                            <input placeholder="Your username" type="text" onChange={inputChangeHandler(setUsername)}/>
                        </div>
                        <div className="form__group">
                            <input placeholder="Your Password" type="password" onChange={inputChangeHandler(setPassword)}/>
                        </div>
                    </div>
                    <div className="loginform__action--btn margin-top-lg">
                        <div className="forgot__password--container margin-bottom-lg">
                            <p className="keep__login">Keep me logged in</p>
                            <p className="forgot__password">Forgot password</p>
                        </div>
                        <div className="login__btn">
                            <button className="btn btn-primary btn-full">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        loginSuccess: state.user.loginSuccess
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onLogin: (username,password)=>dispatch(login(username,password))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
