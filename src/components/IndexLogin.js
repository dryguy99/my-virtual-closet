import React, { Component } from 'react';


class IndexLogin extends Component {

  render() {

    return (
      <div >

          <div className="text-center">
              <h1><span className="fa fa-lock"></span> Authentication</h1>

              <p>Login or Register with:</p>

              <a href="/login" className="login-local login-btn btn btn-default"><span className="fa fa-user"></span>Login with email</a>
              <a href="/signup" className="login-local login-btn btn btn-default"><span className="fa fa-user"></span>Signup</a>
              <a href="/auth/facebook" className="login-btn btn btn-primary"><span className="fa fa-facebook"></span>Login with Facebook</a>
              <a href="/auth/twitter" className="login-btn btn btn-info"><span className="fa fa-twitter"></span>Login with Twitter</a>
              <a href="/auth/google" className="login-btn btn btn-danger"><span className="fa fa-google-plus"></span>Login with Google</a>

          </div>

      </div>

    )
  }
}

export default IndexLogin;
