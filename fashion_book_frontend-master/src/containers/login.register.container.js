import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginRegister from '../components/login.register/login.register'
import * as userActions from '../actions/user.action'
import * as homeActions from '../actions/home.action'
class LoginRegisterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailLogin: '',
            passwordLogin: '',
            email: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            password: '',
            confirm: '',
            notificationRegister: '',
            notificationLogin: '',

        }
    }
    componentWillMount() {
        this.props.actions.auth()
    }
    isvalidFirstName = (firstName) => {
        if(firstName === '')
            return false
        return true
    }
    isvalidLastName = (lastname) => {
        if(lastname === '')
            return false
        return true
    }
    isvalidPassword = (password) => {
        if (password.length < 6)
            return false
        return true
    }
    isvalidConfirm = (password, confirm) => {
        if (confirm != password)
            return false
        return true
    }
    isvalidEmail = (email) => {
        if (email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1)
            return false
        return true
    }
    registerSubmit = async () => {
        if (!this.isvalidEmail(this.state.email)) {
            this.setState({ notificationRegister: "Email invalid" })
            return
        } else {
            this.setState({ notificationRegister: '' })
        }
        if (!this.isvalidPassword(this.state.password)) {
            this.setState({ notificationRegister: 'Password invalid' })
            return
        } else {
            this.setState({ notificationRegister: '' })
        }
        if (!this.isvalidConfirm(this.state.password, this.state.confirm)) {
            this.setState({ notificationRegister: 'Confirm invalid' })
            return
        } else {
            this.setState({ notificationRegister: '' })
        }
        if (!this.isvalidFirstName(this.state.firstname)) {
            this.setState({ notificationRegister: 'Firstname invalid' })
            return
        } else {
            this.setState({ notificationRegister: '' })
        }
        if (!this.isvalidLastName(this.state.lastname)) {
            this.setState({ notificationRegister: 'Lastname invalid' })
            return
        } else {
            this.setState({ notificationRegister: '' })
        }
        try {
            await axios.post('http://localhost:8080/user/register', {
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                address: this.state.address,
                phone_number: this.state.phone
            })
        }
        catch (err) {
            if (err.response.data.msg === "Email already exist")
                this.setState({ notificationRegister: 'Email already exist' })
            else
                this.setState({ notificationRegister: 'Đăng Ký Thất Bại' })
            return
        }
        this.setState({ notificationRegister: 'Đăng Ký Thành Công' })
    }

    loginSubmit = async () => {
        if (!this.isvalidEmail(this.state.emailLogin)) {
            this.setState({ notificationLogin: "Email invalid" })
            return
        } else {
            this.setState({ notificationLogin: '' })
        }
        let res
        try {
            res = await axios.post('http://localhost:8080/user/login', {
                email: this.state.emailLogin,
                password: this.state.passwordLogin,
            })
        }
        catch (err) {
            if (err.response !== undefined) {
                if (err.response.data.msg === "no_registration_confirmation")
                    this.setState({ notificationLogin: 'Tài Khoản Chưa Được Kích Hoạt, Vui Lòng Vào mail Để Kích Hoạt' })
                else {
                    this.setState({ notificationLogin: 'Email or password invalid' })
                }
            }
            else {
                this.setState({ notificationLogin: 'Some thing went wrong' })
            }
            return
        }
        this.props.actions.loginSuccess(res.data.token, res.data.user)
        this.props.history.push('/')

    }
    render() {
        return (
            <div>
                <LoginRegister
                    setEmailogin={(value) => this.setState({ emailLogin: value })}
                    setPasswordlogin={(value) => this.setState({ passwordLogin: value })}
                    setEmail={(value) => this.setState({ email: value })}
                    setFirstname={(value) => this.setState({ firstname: value })}
                    setLastname={(value) => this.setState({ lastname: value })}
                    setAddress={(value) => this.setState({ address: value })}
                    setPhone={(value) => this.setState({ phone: value })}
                    notificationRegister={this.state.notificationRegister}
                    notificationLogin={this.state.notificationLogin}
                    setPassword={(value) => this.setState({ password: value })}
                    setConfirm={(value) => this.setState({ confirm: value })}
                    registerSubmit={() => this.registerSubmit()}
                    loginSubmit={() => this.loginSubmit()}
                    islogin={this.props.islogin}
                    logout={() => this.props.actions.logout()}
                    sortType={this.props.sortType}
                    setSortType={(value) => this.props.homeActions.setSortType(value)}
                    setRangeType={(range) => this.props.homeActions.setRangeType(range)}
                    setSearchText={(value) => this.props.homeActions.setSearchText(value)}
                    searchTextSubmit={() => this.props.homeActions.searchTextSubmit()}
                    history={this.props.history}
                />
            </div>
        )

    }
}

const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        homeActions: bindActionCreators(homeActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginRegisterContainer)