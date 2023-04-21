import React from 'react'
import "../../scss/SingIn.scss"

const SingIn = () => {
  return (
    <>
      <div class="container">
        <div class="login_box">
          <h1>Login</h1>
          <div class="input_box">
            <input type="text" required=""/>
              <label for="">Email</label>
              <ion-icon class="icon " name="mail-outline"></ion-icon>
          </div>
          <div class="input_box">
            <input type="password" required=""/>
              <label for="">password</label>
              <ion-icon class="icon" name="lock-closed-outline"></ion-icon>
          </div>
          <div class="rem">
            <input id="chack" type="checkbox"/>
              <label for="chack">remember me</label>
              <a href="#">forget password</a>
          </div>
          <div class="login">
            <button>Log in </button>
          </div>
          <div>
            <div class="reg">
              <p>don't have a account </p>
              <a href="#">registration</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingIn