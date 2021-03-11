import React from "react";
import { Redirect } from "react-router-dom";
import { LayoutSplashScreen } from "../../../../_metronic/layout";
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

// Cant use hooks in classes so had to make a function instead - surprised this even works lol
function Logout() {
  const { currentUser, logout } = useAuth();

  logout();

  return currentUser ? <LayoutSplashScreen /> : <Redirect to="/auth/login" />;
}

export default Logout;
