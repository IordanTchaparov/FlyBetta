import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LayoutSplashScreen } from "../../../../_metronic/layout";
import * as auth from "../_redux/authRedux";
import { useAuth } from "./AuthContext";

// class Logout extends Component {
//   componentDidMount() {
//     // this.props.logout();
//     logout();
//   }

//   render() {
//     const { hasAuthToken } = this.props;
//     return hasAuthToken ? (
//       <LayoutSplashScreen />
//     ) : (
//       <Redirect to="/auth/login" />
//     );
//   }
// }

// export default connect(
//   ({ auth }) => ({ hasAuthToken: Boolean(auth.authToken) }),
//   auth.actions
// )(Logout);

function Logout() {
  const { currentUser, logout } = useAuth();

  logout();

  return currentUser ? <LayoutSplashScreen /> : <Redirect to="/auth/login" />;
}

export default Logout;
