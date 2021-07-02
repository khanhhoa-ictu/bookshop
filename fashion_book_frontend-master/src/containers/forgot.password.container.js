import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import ForgotPassword from '../components/fogot.password/forgot.password'
import OTP from '../components/fogot.password/otp'
import Fail from '../components/status/fail'
import Success from '../components/status/success'
import EnterNewPassword from '../components/fogot.password/enter.new.password'
class ForgotPasswordContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            notification: '',
            status: null,
            otp: null,
            verify_otp: null,
            notificationOTP: '',
            newPassword: '',
            confirm: '',
            statusForgotPassword: null,
        }
    }
    isvalidEmail = (email) => {
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1)
            return false
        return true
    }
    submit = () => {
        if (this.isvalidEmail(this.state.email))
            this.setState({ email: '' })
        else {
            this.setState({ notification: 'email invalid' })
            return
        }
        this.props.actions.submitForgotPassword(this.state.email)
    }

    componentWillUnmount() {
        this.props.actions.resetForgotPassword()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isForgot === true) {
            this.setState({ status: true })
        }
        else if (nextProps.isForgot === false) {
            this.setState({ status: false })
        }
        if (nextProps.verify_otp === true) {
            this.setState({ verify_otp: true, notificationOTP: "" })
        }
        else if (nextProps.verify_otp === false) {
            this.setState({ verify_otp: false, notificationOTP: 'OTP CODE INVALID' })    
        }
        if (nextProps.forgotpassword === true) {
            this.setState({ statusForgotPassword: true })
        }
        else if (nextProps.forgotpassword === false) {
            this.setState({ statusForgotPassword: true })
        }

    }
    submitEnterNewPassword = (password, confirm) => {
        if (password.length < 6) {
            this.setState({ notificationEnterPassowrd: "input invalid" })
            return
        }
        if (confirm !== password) {
            this.setState({ notificationEnterPassowrd: "input invalid" })
            return
        }
        this.props.actions.submitEnterNewPassword(this.state.newPassword)
    }
    render() {
        const { status } = this.state
        if (status === null) {
            return (
                <ForgotPassword
                    setEmail={(value) => this.setState({ email: value })}
                    submit={() => this.submit()}
                    notification={this.state.notification}
                />
            )
        }
        else if (status) {
            if (this.state.verify_otp) {
                if (this.state.statusForgotPassword) {
                    return (
                        <Success />
                    )
                }
                else if (this.state.statusForgotPassword === false) {
                    return (
                        <Fail />
                    )
                }
                else {
                    return (
                        <EnterNewPassword
                            setNewPassword={(value) => this.setState({ newPassword: value })}
                            setConfirm={(value) => this.setState({ confirm: value })}
                            submitEnterNewPassword={() => this.submitEnterNewPassword(this.state.newPassword, this.state.confirm)}
                        />
                    )
                }

            }
            else {

                return (
                    <OTP
                        setOTP={(value) => this.setState({ otp: value })}
                        submitOTP={() => this.props.actions.submitOTP(this.state.otp)}
                        notificationOTP={this.state.notificationOTP}
                    />
                )
            }

        }
        else {
            return (
                <Fail />
            )
        }

    }
}
const mapStateToProps = state => ({
    isForgot: state.userReducers.forgotPassword.isForgot,
    verify_otp: state.userReducers.forgotPassword.verify_otp,
    forgotpassword: state.userReducers.forgotPassword.forgotpassword
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordContainer)