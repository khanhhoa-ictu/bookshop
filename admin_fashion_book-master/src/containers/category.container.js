import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bookActions from '../actions/book.action'
import Category from '../components/category/category'
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
class CategoryContainer extends Component {
    constructor() {
        super()
    }
    async componentWillMount() {
        this.props.bookActions.getCategory()
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
            this.props.bookActions.getCategory();
          }
      }
    render() {
        return (
            <section id="container" className="">
            <NavbarContainer/>
            <Slider/>
            <Category
                category={this.props.category}
                addCategory={(name) => this.props.bookActions.addCategory(name)}
                isadd={this.props.isadd}
                updateCategory={(id, name) => this.props.bookActions.updateCategory(id, name)}
                isupdate={this.props.isupdate}
                page={this.props.page}
                totalpage={this.props.totalpage}
                backPage={() => this.props.bookActions.categoryBackPage()}
                nextPage={() => this.props.bookActions.categoryNextPage()}
                setPage={page => this.props.bookActions.categorySetPage(page)}
            />
            </section>
            
        )
    }
}
const mapStateToProps = state => ({
    category: state.bookReducers.category.data,
    isadd: state.bookReducers.category.isadd,
    isupdate: state.bookReducers.category.isupdate,
    islogin: state.userReducers.user.islogin,
    totalpage: state.bookReducers.category.totalpage,
    page: state.bookReducers.category.page
})

const mapDispatchToProps = dispatch => {
    return ({
        bookActions: bindActionCreators(bookActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryContainer)