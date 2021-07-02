import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import Statistical from "../components/statistical/statistical";
class StatisticalContainer extends Component {
  constructor() {
    super();
    this.state = {
      dataByDay: [],
      dataByMonth: [],
      dataByYear: [],
      dataByQuauter: []
    };
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
  }
  getStatisticalByDay = async value => {
    let date = value.split("-");
    let res = null;
    try {
      res = await axios.post(
        "http://localhost:8080/bill/statistical/revenue/day",
        {
          day: date[2],
          month: date[1],
          year: date[0]
        }
      );
    } catch (err) {
      console.log(err);
      return;
    }
    this.setState({ dataByDay: res.data.data });
  };
  getStatisticalByMonth = async (value) => {
    let date = value.split("-");
    let res = null;
    try {
      res = await axios.post(
        "http://localhost:8080/bill/statistical/revenue/month",
        {
          month: date[1],
          year: date[0]
        }
      );
    } catch (err) {
      console.log(err);
      return;
    }
    this.setState({ dataByMonth: res.data.data });
  }
  getStatisticalByYear = async (year) => {
    let res = null;
    try {
      res = await axios.post(
        "http://localhost:8080/bill/statistical/revenue/year",
        {
          year: year
        }
      );
    } catch (err) {
      console.log(err);
      return;
    }
    this.setState({ dataByYear: res.data.data });
  }
  getStatisticalByQuauter = async (year, quauter) => {
    let res = null;
    try {
      res = await axios.post(
        "http://localhost:8080/bill/statistical/revenue/quauter",
        {
          year: year,
          quauter: quauter
        }
      );
    } catch (err) {
      console.log(err);
      return;
    }
    this.setState({ dataByQuauter: res.data.data });
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Statistical
          getStatisticalByDay={value => this.getStatisticalByDay(value)}
          dataByDay={this.state.dataByDay}
          getStatisticalByMonth={value => this.getStatisticalByMonth(value)}
          dataByMonth={this.state.dataByMonth}
          getStatisticalByYear={year => this.getStatisticalByYear(year)}
          dataByYear={this.state.dataByYear}
          getStatisticalByQuauter={(year, quauter) => this.getStatisticalByQuauter(year, quauter)}
          dataByQuauter={this.state.dataByQuauter}
        />
      </section>
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
)(StatisticalContainer);
