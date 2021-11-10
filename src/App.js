// import logo from './logo.svg';
// import './App.css';
import AuthUserProvider from "./components/Session/UserProvider";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import SignUpPage from './components/SignUp/SignUpClass';
import * as ROUTES from './constants/routes';
import SignInPage from "./components/SignIn/SignInClass";
import LayoutsPage from "./components/Layouts/LayoutPage";
import AdminPage from "./components/Admin/AdminPage";


function App() {
  return (
    <Router>
      <AuthUserProvider>
        <Navigation />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.HOME} component={LayoutsPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </AuthUserProvider>
    </Router>
  );
}

export default App;
