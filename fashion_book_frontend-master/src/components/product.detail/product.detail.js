import React, { Component } from "react";
import HeaderTop from "../header/header.top";
import HeaderMiddle from "../header/header.middle";
import HeaderBottom from "../header/header.bottom";
import FooterTop from "../footer/footer.top";
import FooterMiddle from "../footer/footer.middle";
import FooterBottom from "../footer/footer.bottom";
import ContentProductDetail from "./cotent.product.detail";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
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
          <HeaderBottom
            sortType={this.props.sortType}
            setSortType={value => this.props.setSortType(value)}
            setSearchText={value => this.props.setSearchText(value)}
            searchTextSubmit={() => this.props.searchTextSubmit()}
          />
        </header>
        <ContentProductDetail
          category={this.props.category}
          publisher={this.props.publisher}
          mproductDetail={this.props.mproductDetail}
          nameCategory={this.props.nameCategory}
          namePublicsher={this.props.namePublicsher}
          bookrelated={this.props.bookrelated}
          islogin={this.props.islogin}
          id_book={this.props.id_book}
          submitComment={(name, email, comment, id_book) =>
            this.props.submitComment(name, email, comment, id_book)
          }
          comment={this.props.comment}
          nameAuthor={this.props.nameAuthor}
          addToCart={product => this.props.addToCart(product)}
          totalpage={this.props.totalpage}
          page={this.props.page}
          backPage={() => this.props.backPage()}
          nextPage={() => this.props.nextPage()}
          setPage={page => this.props.setPage(page)}
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
export default ProductDetail;
