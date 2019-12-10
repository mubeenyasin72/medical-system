import React, { Component } from "react";
import history from "./history";
import { Route, Switch, Router } from "react-router-dom";

//          Importing UserSide Views
import UserLandingPageView from "../User/Views/LandingPageView/landingPage";
import UserSpecificProductView from "../User/Views/SpecificProductView/specificProductView";
import UserCartView from "../User/Views/UserShoppingCart/userShoppingCart";
import UserDeliveryAddressView from "../User/Views/UserAddressView/userAddressView";
import UserOrderPaymentView from "../User/Views/UserOrderPaymentView/userOrderPayment";
import UserLoginView from "../User/Views/LoginView/loginView";
import UserSignUpView from "../User/Views/SignupView/signupView";
import UserOrderTrackingView from "../User/Views/TrackingOrderView/trackOrder";
import UserForgetPasswordView from "../User/Views/ForgotView/forgotView";
import UserProfileView from "../User/Views/DashboardView/profileInfoView";
import UserBillingInfoView from "../User/Views/DashboardView/billInfoView";
import UserBankInfoView from "../User/Views/DashboardView/bankInfoView";
import UserChatView from "../User/Views/UserChatView/userChatView";
//          Importing Seller/Vendor Views
import SellerLoginView from "../Seller/Views/LoginView/loginView";
import SellerSignUpView from "../Seller/Views/SignupView/signupView";
import SellerForgetPasswordView from "../Seller/Views/ForgotPasswordView/forgotPasswordView";
import SellerChatView from "../Seller/Views/ChatView/chatView";
import SellerAddProductView from "../Seller/Views/AddProductView/addProductView";
import SellerAllProductsView from "../Seller/Views/ProductOverView/productOverView";
import SellerOrderInfoView from "../Seller/Views/OrderInfoView/orderInfoView";
import SellerAllOrdersView from "../Seller/Views/OrderOverView/orderOverView";
import SellerStatsView from "../Seller/Views/StatisticsView/statisticsView";
//          Importing SuperAdmin Views
import SuperAdminLoginView from "../SuperAdmin/Views/LoginView/loginView";
import AccountPageView from "../SuperAdmin/Views/MainPage/accountPageView";
import VendorListView from "../SuperAdmin/Views/VendorList/vendorListView";
import CategoryView from "../SuperAdmin/Views/CategoryPage/categoryView";
import SubCategoryView from "../SuperAdmin/Views/SubCategoryPage/subCategoryView";
import ContactInfoView from "../SuperAdmin/Views/ContactUsInfoPage/contactUsInfoView";

class Routing extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            {/* User Side  */}

            <Route
              exact
              path="/"
              render={props => <UserLandingPageView {...props} />}
            />
            <Route
              path="/Specific_Product"
              render={props => <UserSpecificProductView {...props} />}
            />
            <Route
              path="/User/Chat"
              render={props => <UserChatView {...props} />}
            />
            <Route
              path="/User/Shopping_Cart"
              render={props => <UserCartView {...props} />}
            />
            <Route
              path="/User/Delivery_Address"
              render={props => <UserDeliveryAddressView {...props} />}
            />
            <Route
              path="/User/Order_Summary"
              render={props => <UserOrderPaymentView {...props} />}
            />
            <Route
              path="/User/Login"
              render={props => <UserLoginView {...props} />}
            />
            <Route
              path="/User/Signup"
              render={props => <UserSignUpView {...props} />}
            />
            <Route
              path="/User/Forget_Password"
              render={props => <UserForgetPasswordView {...props} />}
            />
            <Route
              path="/User/Profile"
              render={props => <UserProfileView {...props} />}
            />
            <Route
              path="/User/Track_Order"
              render={props => <UserOrderTrackingView {...props} />}
            />
            <Route
              path="/User/Bank_Information"
              render={props => <UserBankInfoView {...props} />}
            />
            <Route
              path="/User/Billing_Information"
              render={props => <UserBillingInfoView {...props} />}
            />

            {/* Seller Side  */}

            <Route
              path="/Seller/Login"
              render={props => <SellerLoginView {...props} />}
            />
            <Route
              path="/Seller/Signup"
              render={props => <SellerSignUpView {...props} />}
            />
            <Route
              path="/Seller/Forget_Password"
              render={props => <SellerForgetPasswordView {...props} />}
            />
            <Route
              path="/Seller/Chat"
              render={props => <SellerChatView {...props} />}
            />
            <Route
              path="/Seller/Add_Products"
              render={props => <SellerAddProductView {...props} />}
            />
            <Route
              path="/Seller/All_Products"
              render={props => <SellerAllProductsView {...props} />}
            />
            <Route
              path="/Seller/Order_Info"
              render={props => <SellerOrderInfoView {...props} />}
            />
            <Route
              path="/Seller/All_Orders"
              render={props => <SellerAllOrdersView {...props} />}
            />
            <Route
              path="/Seller/Statistics"
              render={props => <SellerStatsView {...props} />}
            />

            {/* Super Admin Side  */}

            <Route
              path="/SuperAdmin/Login"
              render={props => <SuperAdminLoginView {...props} />}
            />
            <Route
              path="/SuperAdmin/Dashboard"
              render={props => <AccountPageView {...props} />}
            />
            <Route
              path="/SuperAdmin/VendorList"
              render={props => <VendorListView {...props} />}
            />
            <Route
              path="/SuperAdmin/Category"
              render={props => <CategoryView {...props} />}
            />
            <Route
              path="/SuperAdmin/SubCategory"
              render={props => <SubCategoryView {...props} />}
            />
            <Route
              path="/SuperAdmin/ContactInformation"
              render={props => <ContactInfoView {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routing;
