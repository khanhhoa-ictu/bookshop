import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { bindActionCreators } from "redux";
import Profile from "../components/profile/profile";
import * as userActions from "../actions/user.action";
import * as profileActions from "../actions/profile.action";
import Loading from "../components/loading/loading";
import storeConfig from "../config/storage.config";
class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      firstName: null,
      lastName: null,
      address: null,
      phone_number: null,
      notiupdatePassword: null
    };
  }
  async componentWillMount() {
    let res = await this.props.actions.auth();
    if (res === false) this.props.history.push("/");
    // console.log(this.props.params.email)
    //console.log(storeConfig.getUser().email)
    // if(this.props.match.params.email !==  storeConfig.getUser().email)
    //     this.props.history.push('/')
    if (storeConfig.getUser() !== null) {
      this.setState({
        email: storeConfig.getUser().email,
        firstName: storeConfig.getUser().firstName,
        lastName: storeConfig.getUser().lastName,
        address: storeConfig.getUser().address,
        phone_number: storeConfig.getUser().phone_number
      });
    }
  }
  componentWillUnmount() {
    this.props.profileActions.resetProfile();
  }
  updatePassword = async (oldpassword, newpassword) => {
    let res = null;
    try {
      res = await axios.post("http://localhost:8080/user/updatepassword", {
        email: storeConfig.getUser().email,
        oldpassword: oldpassword,
        newpassword: newpassword
      });
    } catch (err) {
      console.log(err);
      this.setState({ notiupdatePassword: false });
      return false;
    }

    this.setState({notiupdatePassword: true})
  };
  resetUpdatePassword = () => {
      this.setState({
          notiupdatePassword: null
      })
  }
  render() {
    if (this.props.islogin) {
      return (
        <div>
          <Profile
            islogin={this.props.islogin}
            logout={() => this.props.actions.logout()}
            email={this.state.email}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            address={this.state.address}
            phone_number={this.state.phone_number}
            setFirstName={value => this.setState({ firstName: value })}
            setLastName={value => this.setState({ lastName: value })}
            setAddress={value => this.setState({ address: value })}
            setPhoneNumber={value => this.setState({ phone_number: value })}
            updateInfor={() =>
              this.props.profileActions.updateInfor(
                this.state.email,
                this.state.firstName,
                this.state.lastName,
                this.state.address,
                this.state.phone_number
              )
            }
            isupdate={this.props.isupdate}
            history={this.props.history}
            updatePassword={(oldpassword, newpassword) =>
              this.updatePassword(oldpassword, newpassword)
            }
            notiupdatePassword={this.state.notiupdatePassword}
            resetUpdatePassword={() => this.resetUpdatePassword()}
          />
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}
const mapStateToProps = state => ({
  islogin: state.userReducers.login.islogin,
  isupdate: state.profileReducers.profile.isupdate
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
    profileActions: bindActionCreators(profileActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
