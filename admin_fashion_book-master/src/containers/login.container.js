import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/user.action";
import Login from "../components/login/login";
import  { Redirect } from 'react-router-dom'
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notiLogin: ""
    };
  }
  loginSubmit = async (email, password) => {
    if (!this.isvalidEmail(email)) {
      this.setState({ notiLogin: "Email invalid" });
      return;
    } else {
      this.setState({ notiLogin: "" });
    }
    let res;
    try {
      res = await axios.post("http://localhost:8080/admin/login", {
        email: email,
        password: password
      });
    } catch (err) {
      if (err.response !== undefined) {
        if (err.response.data.msg === "no_registration_confirmation")
          this.setState({ notiLogin: "The account has not been activated" });
        else {
          this.setState({ notiLogin: "Email or password invalid" });
        }
      } else {
        this.setState({ notiLogin: "Some thing went wrong" });
      }
      return;
    }
    this.props.userActions.loginSuccess(res.data.token, res.data.user);
    window.location.replace('/')
  };
  isvalidEmail = email => {
    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1)
      return false;
    return true;
  };
  render() {
    return (
      <div>
        <Login
          loginSubmit={(email, password) => this.loginSubmit(email, password)}
          notiLogin={this.state.notiLogin}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
    islogin: state.userReducers.user.islogin
});

const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
