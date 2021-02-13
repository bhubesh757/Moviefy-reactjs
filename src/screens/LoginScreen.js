import React, { useState } from 'react'


import './LoginScreen.css'

import SignUpScreen from './SignUpScreen'
function LoginScreen() {

    const [signIn, setsignIn] = useState(false);

    return (
        <div className = 'loginscreen'>
            <div className="loginscreen__background">
                <img className = 'loginscreen__logo' src = 'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt = ''></img>
            </div>

            <button className = 'loginscreen__button'
            onClick = {() => setsignIn(true)}
            >
                Sign In
            </button>

            <div className="loginscreen__gradient">

            </div>

            <div className="loginscreen__body">
                {
                    signIn ? (
                        <SignUpScreen></SignUpScreen>
                    ):(

                <>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere.Cancel at any time.</h2>
                <h3>    
                Ready to watch? Enter your email to create or restart your membership.
                </h3>
                <div className="loginscreen__input">
                    <form>
                        <input type = 'email' 
                        placeholder = 'Email Address'
                        ></input>
                        <button
                        onClick = {() => setsignIn(true)}
                        className = 'loginscreen__getStarted'>
                           Get Started >
                        </button>
                    </form>
                </div>
                </>
                    )
                }
            </div>
        </div>
    )
}

export default LoginScreen
