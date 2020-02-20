import React, { Component } from "react";

//Adding classnames to concatenate string
import cx from "classnames";

//Adding a CSS Modules Stylesheet
import classes from "./index.module.css";

import facebook from "../../icons/Facebook.png";
import google from "../../icons/Google.png";
import linkedin from "../../icons/Linkedin.png";

class signin extends Component {
  state = {};

  render() {
    console.log("Classes: ", classes);
    return (
      <div className={classes.App}>
        <div className={classes.signin}>
          <p>Sign in</p>
          <p>
            To keep connected with us please sign in with your personal info
          </p>
        </div>
        <div className={cx(classes.grid_container, { [classes.host]: true })}>
          <button className={cx(classes.grid_item, classes.grid_item_3)}>
            <img src={google} alt={"google"} />
            Sign in with Google
          </button>
          <button className={cx(classes.grid_item, classes.grid_item_3)}>
            <img src={facebook} alt={"facebook"} />
            Sign in with facebook
          </button>
          <button className={cx(classes.grid_item, classes.grid_item_3)}>
            <img src={linkedin} alt={"linkedin"} />
            Sign in with linkedin
          </button>
        </div>
        <div className={cx(classes.grid_container, classes.data)}>
          <p className={cx(classes.grid_item, classes.grid_item_12)}>
            E-mail Adress
          </p>
          <input
            className={cx(classes.grid_item, classes.grid_item_8)}
            placeholder="Enter Your email"
          ></input>
          <p className={cx(classes.grid_item, classes.grid_item_6)}>Password</p>
          <p className={cx(classes.grid_item, classes.grid_item_6)}>
            Forget password ?
          </p>
          <input
            className={cx(classes.grid_item, classes.grid_item_8)}
            placeholder="Enter Your password"
          ></input>
        </div>
        <div className={cx(classes.grid_container, classes.send)}>
          <button className={cx(classes.grid_item, classes.grid_item_3)}>
            Sign in
          </button>
          <p className={cx(classes.grid_item, classes.grid_item_12)}>
            You don't have an account,{" "}
            <span className={classes.link}>Sign up</span>
          </p>
        </div>
      </div>
    );
  }
}

export default signin;
