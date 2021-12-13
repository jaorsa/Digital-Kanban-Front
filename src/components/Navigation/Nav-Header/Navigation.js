import UserContext from "../../../store/Auth/user-context";
// import { useContext } from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import classes from "./Navigation.module.css";
import SignOutButton from "./SignOutButton";

const Navigation = () => {
  // const userCtx = useContext(UserContext);
  return (
    <header>
      <h1>
        {/* Kanban Digital */}
        <NavLink
          activeClassName={classes.active}
          className={classes.link}
          to={ROUTES.HOME}
        >
          Kanban Digital
        </NavLink>
      </h1>
      <nav className={classes.nav}>
        <UserContext.Consumer>
          {(user) =>
            !!user.auth ? (
              user.auth.role_id === 5 ? (
                <NavigationAdmin />
              ) : (
                <NavigationAuth />
              )
            ) : (
              <NavigationNonAuth />
            )
          }
        </UserContext.Consumer>
      </nav>
    </header>
  );
};

const NavigationAuth = () => (
  <ul>
    <li>
      <NavLink activeClassName={classes.active} to={ROUTES.ACCOUNT}>
        Account
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName={classes.active} to={ROUTES.LANDING}>
        Landing
      </NavLink>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationAdmin = () => (
  <ul>
    <li>
      <NavLink activeClassName={classes.active} to={ROUTES.ACCOUNT}>
        Account
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName={classes.active} to={ROUTES.HOME}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName={classes.active} to={ROUTES.ADMIN}>
        Admin
      </NavLink>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <NavLink activeClassName={classes.active} to={ROUTES.SIGN_IN}>
        Sign In
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName={classes.active} to={ROUTES.SIGN_UP}>
        Sign Up
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
