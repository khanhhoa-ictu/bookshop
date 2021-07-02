import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../actions/book.action";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import Bill from "../components/bill/bill";
class BillContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.bookActions.getBill("true");
    let res = await this.props.userActions.auth();
    if (res === false) this.props.history.push("/login");
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Bill
         updateIssend={(name,id) =>
          this.props.bookActions.updateIssend(name,id)
         }
          isupdate={this.props.isupdate}
          page={this.props.page}
          totalpage={this.props.totalpage}
          bill={this.props.bill}
          backPage={() => this.props.bookActions.billBackPage()}
          nextPage={() => this.props.bookActions.billNextPage()}
          setPage={page => this.props.bookActions.billSetPage(page)}
          getBill={(status => this.props.bookActions.getBill(status))}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  islogin: state.userReducers.user.islogin,
  totalpage: state.bookReducers.bill.totalpage,
  page: state.bookReducers.bill.page,
  bill: state.bookReducers.bill.data
});

const mapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillContainer);
