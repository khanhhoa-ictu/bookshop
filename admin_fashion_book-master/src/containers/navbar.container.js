import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/user.action";
import Navbar from '../components/navbar/navbar'
class NavbarContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>
                <Navbar logout={() => this.props.userActions.logout()}/>
            </div>
        )
    }

}
const mapStateToProps = state => ({
    islogin: state.userReducers.user.islogin
})

const mapDispatchToProps = dispatch => {
    return ({
        userActions: bindActionCreators(userActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer)