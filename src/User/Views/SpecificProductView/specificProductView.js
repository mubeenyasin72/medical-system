import React, { Component } from "react";

import TopNavBar from "../../Components/LandingPage/TopNavBar/topNavBar";
import Header from "../../Components/LandingPage/Header/header";
import CategoryDropDown from "../../Components/LandingPage/CategoryDropDown/categoryDropDown";
import BreadCrum from "../../Components/SpecificProduct/BreadCrums/breadCrums";
import SpecificProduct from "../../Components/SpecificProduct/SpecificProduct/specificProduct";
import ProductDescription from "../../Components/SpecificProduct/ProductDescription/productDescription";
import ProductList from "../../Components/LandingPage/ProductsList/productList";
import Footer from "../../Components/LandingPage/Footer/footer";

class SpecificProductView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <Header />
        <div style={{ marginTop: "-40px", marginBottom: "2px" }}>
          <CategoryDropDown />
        </div>
        <div style={{ padding: "2% 10% 0% 10%" }}>
          <BreadCrum />
        </div>
        <SpecificProduct />
        <ProductDescription />
        <div style={{ padding: "2% 5% 2% 5%" }}>
          <ProductList />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default SpecificProductView;
