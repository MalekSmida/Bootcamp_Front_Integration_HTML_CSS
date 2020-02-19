import React, { Component } from "react";
import "./index.css";

import facebook from "../../icons/Facebook.png";
import google from "../../icons/Google.png";
import linkedin from "../../icons/Linkedin.png";

class signin extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div className="signin">
          <p>Sign in</p>
          <p>
            To keep connected with us please sign in with your personal info
          </p>
        </div>
        <div className="grid-container host">
          <button className="grid-item grid-item-3">
            <img src={google} alt={"google"} />
            Sign in with Google
          </button>
          <button className="grid-item grid-item-3">
            <img src={facebook} alt={"facebook"} />
            Sign in with facebook
          </button>
          <button className="grid-item grid-item-3">
            <img src={linkedin} alt={"linkedin"} />
            Sign in with linkedin
          </button>
        </div>
        <div className="grid-container data">
          <p className="grid-item grid-item-12">E-mail Adress</p>
          <input
            className="grid-item grid-item-8"
            placeholder="Enter Your email"
          ></input>
          <p className="grid-item grid-item-6">Password</p>
          <p className="grid-item grid-item-6">Forget password ?</p>
          <input
            className="grid-item grid-item-8"
            placeholder="Enter Your password"
          ></input>
        </div>
        <div className="grid-container send">
          <button className="grid-item grid-item-3">Sign in</button>
          <p className="grid-item grid-item-12">
            You don't have an account, <span className="link">Sign up</span>
          </p>
        </div>
      </div>
    );
  }
}

export default signin;
