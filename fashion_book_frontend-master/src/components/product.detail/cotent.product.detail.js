import React, { Component } from "react";
import storeConfig from "../../config/storage.config";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class ContentProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      notificationComment: "",
      comment: "",
      quantity: 1,
      noti: false,
      show:false,
      pagination: []
    };
  }
  componentWillMount() {
    let tmp = [];
    for (let i = 1; i <= this.props.totalpage; i++) {
      tmp.push(i);
    }
    this.setState({ pagination: tmp });
    if (storeConfig.getUser() !== null) {
      this.setState({
        name: storeConfig.getUser().firstName,
        email: storeConfig.getUser().email
      });
    } else {
      this.setState({
        name: "",
        email: ""
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.totalpage !== this.props.totalpage) {
      let tmp = [];
      for (let i = 1; i <= nextProps.totalpage; i++) {
        tmp.push(i);
      }
      this.setState({ pagination: tmp });
    }
    if (nextProps.islogin === false) {
      this.setState({
        name: "",
        email: ""
      });
    }
  }
  renderPagination() {
    if (this.state.pagination.length === 0) {
      return null;
    } else {
      return (
        <ul className="pagination pagination-custom">
          <li onClick={() => this.props.backPage()}>
            <a>&laquo;</a>
          </li>
          {this.state.pagination.map((element, index) => {
            if (this.props.page === element) {
              return (
                <li
                  className="active"
                  onClick={() => this.props.setPage(element)}
                >
                  <a>{element}</a>
                </li>
              );
            } else {
              return (
                <li onClick={() => this.props.setPage(element)}>
                  <a>{element}</a>
                </li>
              );
            }
          })}
          <li onClick={() => this.props.nextPage()}>
            <a>&raquo;</a>
          </li>
        </ul>
      );
    }
  }
  handlename = name => {
    if (this.state.name === "") {
      this.setState({ name: name });
    }
  };
  submitComment = () => {
    if (this.state.name === "") {
      this.setState({ notificationComment: "Name must not be blank " });
      return;
    } else {
      this.setState({ notificationComment: "" });
    }
    if (this.state.comment === "") {
      this.setState({ notificationComment: "Comment must not be blank " });
      return;
    } else {
      this.setState({ notificationComment: "" });
    }
    this.props.submitComment(
      this.state.name,
      this.state.email,
      this.state.comment,
      this.props.id_book
    );
    this.setState({ comment: "" });
  };
  submitOrder = () => {
    if (this.state.quantity < 0) {
      this.setState({ noti: false});
      return;
    } else {
      this.setState({ noti: true });
    }
    let product = this.props.mproductDetail;
    product.count = this.state.quantity;
    this.props.addToCart(product);
  };
  render() {
    let xhtml='';
    console.log(this.state.noti);
    if(this.state.noti){
      xhtml = <div className='aler-box'>
        <div className='btn-close ' onClick={() => this.setState({ noti: false })}>
          X
        </div>
      <div className='aler-title'>
        <h3 className='title'>Thông Tin Đơn Hàng</h3>
      </div>
      <div className='aler-body'>Đặt Hàng thành công</div>
      <div className='alert-footer'>
        <button className="roduct-variation" onClick={() => this.setState({ noti: false })}>
          Cancel
          
        </button>
      </div>
    </div>
    }
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <h2>Category</h2>
                <div className="panel-group category-products" id="accordian">
                  {this.props.category.map((element, index) => {
                    return (
                      <div key={index} className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a key={index}>{element.name}</a>
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
              </div>
            </div>
            <div className="col-sm-9 padding-right">
              <div className="product-details">
                <div className="col-sm-5">
                  <div className="view-product">
                    <img src={this.props.mproductDetail.img} alt="" />
                  </div>
                 
                </div>
                <div className="col-sm-7">
                  <div className="product-information">
                    <img
                      src="/assets/images/product-details/new.jpg"
                      className="newarrival"
                      alt=""
                    />
                    <h2>{this.props.mproductDetail.name}</h2>
                   
                    <img src="images/product-details/rating.png" alt="" />

                    <span>
                      <div>
                        <span>Giá:</span>
                        <span>{this.props.mproductDetail.price}</span>
                        
                      </div>
                      <div className='count-product'>
                        <p className='count'>Số Lượng:</p>
                        <input
                        type="number"
                        min="0"
                        onChange={e =>
                          this.setState({ quantity: e.target.value })
                        }
                        value={this.state.quantity}
                      />
                      </div>
                      <button
                        onClick={() => this.submitOrder()}
                        type="button"
                        className="btn btn-default cart"
                      >
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </button>
                    </span>
                    <p>{this.state.noti}</p>
                    <p>
                      <b>Category:</b> {this.props.nameCategory}
                    </p>
                    <p>
                      <b>Release date </b>{" "}
                      {new Date(
                        this.props.mproductDetail.release_date
                      ).toDateString("yyyy-MM-dd")}
                    </p>
                    <p>
                      <b>Publisher:</b> {this.props.namePublicsher}
                    </p>
                    <p>
                      <b>Author:</b> {this.props.nameAuthor}
                    </p>
                   
                  </div>
                  <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    container={this}
                    aria-labelledby="contained-modal-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title">
                        showfication
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Đặt Hàng Thành Công</Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => this.setState({ show: false })}>
                        <a>Cancel</a>
                      </Button>
                      
                    </Modal.Footer>
                  </Modal>
                </div>
                {xhtml}
               
                  <div className="col-sm-12 review-product">
                    <div>
                      <h3>Review Sách</h3>
                    </div>
                   
                  </div>
                  <div className="tab-content">

                    <div className="tab-pane fade active in" id="reviews">
                      <div className="col-sm-12">
                        <div className="content-conment">
                          {this.props.comment.map((element, index) => {
                            return (
                              <p>
                                <span>{element.name}:</span> {element.comment}
                              </p>
                            );
                          })}
                          <div className='Pagination-flex'>
                            {this.renderPagination()}
                          </div>
                         
                        </div>
                        <hr />
                        <p style={{ color: "#5BBCEC" }}>
                          {this.state.notificationComment}
                        </p>
                        <p>
                          <h4><b>Bình Luận</b></h4>
                        </p>

                        <form action="#">
                        
                          <textarea
                            value={this.state.comment}
                            onChange={e =>
                              this.setState({ comment: e.target.value })
                            }
                          />
                          <button
                            type="button"
                            className="btn btn-default pull-right"
                            onClick={() => this.submitComment()}
                          >
                            Bình Luận
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
             
                <div className="recommended_items">
                  <h2 className="title text-center">recommended items</h2>

                  <div
                    id="recommended-item-carousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="item active">
                        {this.props.bookrelated.map((element, index) => {
                          return (
                            <div className="col-sm-4">
                              <div className="product-image-wrapper">
                                <div className="single-products">
                                  <div className="productinfo text-center">
                                    <a href={"/product/" + element._id}>
                                      <img src={element.img} alt="" />
                                      <h2>  {new Intl.NumberFormat('de-DE', {currency: 'EUR' }).format(element.price)}<sup>đ</sup></h2>
                                      <p>{element.describe}</p>{" "}
                                    </a>
                                    <button
                                      onClick={() => {
                                        element.count = 1;
                                        this.props.addToCart(element);
                                      }}
                                      type="button"
                                      className="btn btn-default add-to-cart"
                                    >
                                      <i className="fa fa-shopping-cart" />Add
                                      to cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <a
                      className="left recommended-item-control"
                      href="#recommended-item-carousel"
                      data-slide="prev"
                    >
                      <i className="fa fa-angle-left" />
                    </a>
                    <a
                      className="right recommended-item-control"
                      href="#recommended-item-carousel"
                      data-slide="next"
                    >
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
             
      </section>
    );
  }
}
export default ContentProductDetail;
