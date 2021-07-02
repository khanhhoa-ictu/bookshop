import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/user.action";
import User from "../components/user/user";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
class UserContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.userActions.getUser();
    let res = await this.props.userActions.auth()
        if (res === false)
            this.props.history.push('/login')
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
    if (nextProps.page !== this.props.page) {
      this.props.userActions.getUser();
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <User
          user={this.props.user}
          isadd={this.props.isadd}
          isupdate={this.props.isupdate}
          page={this.props.page}
          totalpage={this.props.totalpage}
          backPage={() => this.props.userActions.backPage()}
          nextPage={() => this.props.userActions.nextPage()}
          setPage={page => this.props.userActions.setPage(page)}
          updateUser={(
            email,
            firstName,
            lastName,
            address,
            phone_number,
            is_admin
          ) =>
            this.props.userActions.updateUser(
              email,
              firstName,
              lastName,
              address,
              phone_number,
              is_admin
            )
          }
          deleteUser={email => this.props.userActions.deleteUser(email)}
          addUser={(
            email,
            password,
            firstName,
            lastName,
            address,
            phone_number,
            is_admin
          ) =>
            this.props.userActions.addUser(
              email,
              password,
              firstName,
              lastName,
              address,
              phone_number,
              is_admin
            )
          }
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  user: state.userReducers.user.data,
  isadd: state.userReducers.user.isadd,
  isupdate: state.userReducers.user.isupdate,
  totalpage: state.userReducers.user.totalpage,
  page: state.userReducers.user.page,
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
)(UserContainer);
