import React from 'react'
import LoginForm from '../LoginForm/LoginForm'

const AuthPage = () => {
    return (
        <div className="authpage__container">
            <section className="auth__leftbar">
                <LoginForm />
            </section>
            <section className="auth__rightbar">
                
            </section>
        </div>
    )
}

export default AuthPage
