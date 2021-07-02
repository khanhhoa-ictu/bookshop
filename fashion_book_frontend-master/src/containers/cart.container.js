import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cart from "../components/cart/cart";
import * as productActions from "../actions/product.action";
import * as homeActions from "../actions/home.action";
import * as userActions from "../actions/user.action";
import * as cartActions from '../actions/cart.action'
class CartContainer extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.actions.auth()
    this.props.cartActions.getCart()

  }
  render() {
    return (
      <Cart
        islogin={this.props.islogin}
        logout={() => this.props.actions.logout()}

        searchTextSubmit={() => this.props.homeActions.searchTextSubmit()}
        setSearchText={value => this.props.homeActions.setSearchText(value)}
        history={this.props.history}
        cart={this.props.cart}
        updateProductInCart={(product) => this.props.cartActions.updateProductInCart(product)}
        deteleProductInCart={(id_product) => this.props.cartActions.deteleProductInCart(id_product)}
      
        payment={( address, phone, name,total) => 
          this.props.cartActions.payment( address, phone, name,total)}
        ispay={this.props.ispay}
      />
    );
  }
}
const mapStateToProps = state => ({
  islogin: state.userReducers.login.islogin,
  cart: state.cartReducers.cart.data,
  ispay: state.cartReducers.cart.ispay
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
    homeActions: bindActionCreators(homeActions, dispatch),
    productActions: bindActionCreators(productActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
