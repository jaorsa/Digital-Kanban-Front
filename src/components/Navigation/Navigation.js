import UserContext from "../Session/user-context";
// import { useContext } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import classes from "./Navigation.module.css";
import SignOutButton from "./SignOutButton";

const Navigation = () => {
  // const userCtx = useContext(UserContext);
  return (
    <header>
      <h1>
        Kanban Digital
        {/* {<Link to={ROUTES.LANDING}>
        Kanban Digital
        </Link> } */}
      </h1>
      <nav className={classes.nav}>
        <UserContext.Consumer>
        { user => 
          !!user.auth ? <NavigationAdmin /> : <NavigationNonAuth />}
        </UserContext.Consumer>
      </nav>
    </header>
  );
};

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationAdmin = () => (
  <ul>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Layouts</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
    <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </li>
  </ul>
);

export default Navigation;
