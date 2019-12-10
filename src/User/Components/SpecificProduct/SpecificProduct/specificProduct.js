import React, { Component } from "react";
import $ from "jquery";
import "./specificProduct.css";
import { Link } from "react-router-dom";

class SpecificProduct extends Component {
  state = {
    qty: 1
  };
  componentDidMount() {
    $(".tile")
      .on("mouseover", function() {
        $(this)
          .children(".photo")
          .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
      })
      .on("mouseout", function() {
        $(this)
          .children(".photo")
          .css({ transform: "scale(1)" });
      })
      .on("mousemove", function(e) {
        $(this)
          .children(".photo")
          .css({
            "transform-origin":
              ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
              "% " +
              ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
              "%"
          });
      })
      // tiles set up
      .each(function() {
        $(this)
          // add a photo container
          .append('<div class="photo"></div>')
          // some text just to show zoom level on current item in this example
          .append(
            '<div class="txt"><div class="x">' +
              $(this).attr("data-scale") +
              "x</div>ZOOM ON<br>HOVER</div>"
          )
          // set up a background image for each tile based on data-image attribute
          .children(".photo")
          .css({
            "background-image": "url(" + $(this).attr("data-image") + ")"
          });
      });
  }
  OnIncrement = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  OnDecrement = () => {
    if (this.state.qty > 1) {
      this.setState({ qty: this.state.qty - 1 });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div class="container specific-product-container">
          <div class="row">
            <div
              class="col-2"
              style={{ textAlign: "center", marginTop: "45px" }}
            >
              <img
                class="specific-product-image-container"
                src={require("../../../../Assets/Images/T-Shirt.jpg")}
              />
              <img
                class="specific-product-image-container"
                src={require("../../../../Assets/Images/T-Shirt.jpg")}
              />
              <img
                class="specific-product-image-container"
                src={require("../../../../Assets/Images/T-Shirt.jpg")}
              />
            </div>
            <div class="col-5" style={{ marginTop: "45px" }}>
              <div class="tiles">
                <div
                  class="tile"
                  //   width="370px"
                  data-scale="2.4"
                  data-image={require("../../../../Assets/Images/T-Shirt.jpg")}
                ></div>
              </div>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="col-6">
                  <span class="sale-span">SALE</span>
                </div>
                <div class="col-6">
                  <span class="product-id-span" style={{ float: "right" }}>
                    Product ID:
                    <br />
                    261311
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h2 class="specific-product-h2">T-Shirt Summer Vibes</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <span class="specific-product-price">$89.99</span>
                </div>
                <div class="col-3">
                  <span class="specific-product-original-price">$119.99</span>
                </div>
                <div class="col-6">
                  <div style={{ marginTop: "7px" }}>
                    <span class="brand-span">House My Brand</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12" style={{ marginTop: "30px" }}>
                  <span class="filter-title-span">
                    <b>Color:</b>
                  </span>
                </div>
                <div class="row col-12" style={{ marginTop: "10px" }}>
                  <div class="col-2">
                    <div class="color-div">
                      <div
                        class="color-filter-div"
                        style={{ backgroundColor: "#000000" }}
                      ></div>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="color-div">
                      <div
                        class="color-filter-div"
                        style={{ backgroundColor: "#fcdfb4" }}
                      ></div>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="color-div">
                      <div
                        class="color-filter-div"
                        style={{ backgroundColor: "#2900fe" }}
                      ></div>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="color-div">
                      <div
                        class="color-filter-div"
                        style={{ backgroundColor: "#eeeeee" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12" style={{ marginTop: "30px" }}>
                  <span class="filter-title-span">
                    <b>Size:</b>
                  </span>
                </div>
                <div class="col-12" style={{ marginTop: "10px" }}>
                  <div class="row">
                    <div class="col-6 col-md-4">
                      <div class="form-group">
                        <select
                          class="form-control filter-size-label"
                          id="exampleFormControlSelect1"
                        >
                          <option selected>CHOOSE SIZE</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12" style={{ marginTop: "30px" }}>
                  <span class="filter-title-span">
                    <b>Quantity:</b>
                  </span>
                </div>
                <div class="col-4" style={{ marginTop: "10px" }}>
                  <div class="quantity-box row">
                    <button
                      onClick={this.OnDecrement}
                      class="btn increment-btn col-3"
                    >
                      -
                    </button>
                    <input
                      class="form-control col-6 qty-input-control"
                      value={this.state.qty}
                      type="text"
                    />
                    <button
                      onClick={this.OnIncrement}
                      class="btn decrement-btn col-3"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="col-4">
                  <Link to="/User/Shopping_Cart">
                    <button class="btn specific-product-cart-btn">
                      <b>ADD TO CART</b>
                    </button>
                  </Link>
                </div>
                <div class="col-2">
                  <button class="btn add-to-whish-list-btn">
                    <img
                      width="25px"
                      src={require("../../../../Assets/Icons/like.svg")}
                    />
                  </button>
                </div>
                <div class="col-2">
                  <Link to="/User/Chat">
                    <button class="btn add-to-whish-list-btn">
                      <img
                        width="25px"
                        src={require("../../../../Assets/Icons/chat.png")}
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SpecificProduct;
