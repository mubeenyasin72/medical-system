import React, { Component } from "react";
import "./productCard.css";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Link to="/Specific_Product">
          <div class="product-card">
            <div class="product-card-badge">Hot</div>
            <div class="product-tumb">
              <img
                src={
                  this.props.src
                    ? this.props.src
                    : "https://i.imgur.com/xdbHo4E.png"
                }
                alt=""
              />
            </div>
            <div class="product-details">
              {/* <span class="product-catagory">Women,bag</span> */}
              <h5>
                {this.props.title ? this.props.title : "Women leather bag"}
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                possimus nostrum!
              </p>
              <div class="product-bottom-details">
                <div class="product-price">
                  <small>$96.00</small>$
                  {this.props.price ? this.props.price : "230.99"}
                </div>
                <div class="product-links">
                  <a href="">
                    <i class="fa fa-heart"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default ProductCard;
