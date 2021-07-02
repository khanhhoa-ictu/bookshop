import React, { Component } from "react";
import { Link } from "react-router-dom";
import storeConfig from "../../config/storage.config";
class HeaderMiddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Account"
    };
  }
  componentWillMount() {
    if (storeConfig.getUser() !== null) {
      this.setState({
        email: storeConfig.getUser().email
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.islogin) {
      this.setState({
        email: "Account"
      });
    } else {
      this.setState({
        email: storeConfig.getUser().email
      });
    }
  }
  handlelogin = () => {
    if (this.props.islogin) {
      return (
        <li
          className="btn-custom"
          onClick={() => {
            window.location.reload();
            this.props.logout();
            this.props.history.push("/");
          }}
        >
          <a>
            <i className="fa fa-lock" />Logout
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <Link to="/login_register">
            <i className="fa fa-lock" />Login
          </Link>
        </li>
      );
    }
  };
  handleProfile = () => {
    if (this.state.email === "Account") {
      return;
    } else {
        
      this.props.history.push("/profile/" + this.state.email);
    }
  };
  hoverlogin = () =>{
    if(this.props.islogin){
      return (
        <ul className='sub-menu'>

<li   onClick={() => this.handleProfile()}>
                <Link to={"/"}  >Hồ Sơ </Link>
              </li>

              <li><Link to='/purchase_history' >Đơn Hàng </Link></li>
          
          </ul>
      );
    }
  }
  render() {
    return (
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo pull-left">
                <a href="/">
                  <img src="/assets/images/home/logo1.gif" alt="" />
                </a>
              </div>
             
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav collapse navbar-collapse">
                <li className='dropdown'>
                    <a className='Setting-item'>
                      <i className="fa fa-user dropbtn"></i>
                    </a>
                      {this.hoverlogin()}
                </li>
                 
                 
                  <li>
                    <Link to={"/cart"}>
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                  {this.handlelogin()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMiddle;
