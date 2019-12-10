import React, { Component } from "react";

import TopNavBar from "../../Components/LandingPage/TopNavBar/topNavBar";
import Header from "../../Components/LandingPage/Header/header";
import MainCategoryDropDown from "../../Components/LandingPage/CategoryDropDown/categoryDropDown";
import Carousel from "../../Components/LandingPage/Carousel/carousel";
import ProductList from "../../Components/LandingPage/ProductsList/productList";
import WhyChooseUs from "../../Components/LandingPage/WhyChooseUs/whyChooseUs";
import Footer from "../../Components/LandingPage/Footer/footer";

class LandingPageView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <Header />
        <div style={{ marginTop: "-40px", marginBottom: "2px" }}>
          <MainCategoryDropDown />
        </div>
        <Carousel />
        <div style={{ padding: "2% 5% 2% 5%" }}>
          <ProductList />
          <ProductList />
          <ProductList />
        </div>
        <div style={{ padding: "0% 1% 0% 1%" }}>
          <hr />
        </div>
        <div style={{ padding: "0% 5% 2% 5%" }}>
          <WhyChooseUs />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default LandingPageView;
