import { Button, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import googleLogo from "../../assets/icons/google.png"
import slackLogo from "../../assets/images/slack_logo.svg"
import "../../scss/SignIn.scss"
import { auth, provider } from "../../firebase"

const SingIn = () => {

  const googleLogIn = () => {
    auth.signInWithPopup(provider)
      .then(result => { console.log("====>", result) })
      .catch(error => console.log("====>", error.message));
  }
  return (
    <>
      <div className="container">
        <div className="login_box">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
            <h1>Login</h1><img width={"150px"} src={slackLogo} />
          </div>
          <div className="input_box">
            <label for="">Email :-</label>
            <input type="text" required="" />
          </div>
          <div className="input_box">
            <label for="">Password :-</label>
            <input type="password" required="" />
          </div>
          <div className="rem">
            <input id="chack" type="checkbox" />
            <label for="chack">remember me</label>
            <Link href="/">forget password</Link>
          </div>
          <div className="login">
            <Button>Log in </Button>
          </div>
          <div>
            <div className="reg">
              <p>don't have a account </p>
              <Link to="/sign-up">SignUp</Link>
            </div>
            <div className='google-button' onClick={googleLogIn}>
              <span className="sign-up-google-icon">
                <img width={"100%"} src={googleLogo} />
              </span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingIn