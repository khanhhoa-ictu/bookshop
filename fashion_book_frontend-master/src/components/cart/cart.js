import React, { Component } from "react";
import HeaderTop from "../header/header.top";
import HeaderMiddle from "../header/header.middle";
import HeaderBottom from "../header/header.bottom";
import FooterTop from "../footer/footer.top";
import FooterMiddle from "../footer/footer.middle";
import FooterBottom from "../footer/footer.bottom";
import ContentCart from "./content.cart";
class Cart extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <header id="header">
        
          <HeaderMiddle
            islogin={this.props.islogin}
            logout={() => this.props.logout()}
            history={this.props.history}
          />
        </header>
        <ContentCart
          islogin={this.props.islogin}
          cart={this.props.cart}
          updateProductInCart={product =>
            this.props.updateProductInCart(product)
          }
          deteleProductInCart={(id_product) => this.props.deteleProductInCart(id_product)}
    
       
          payment={( address, phone, name,total) => 
            this.props.payment( address, phone, name,total)}
          ispay={this.props.ispay}
        />
        <footer id="footer">
          <FooterTop />
          <FooterMiddle />
          <FooterBottom />
        </footer>
      </div>
    );
  }
}
export default Cart;
