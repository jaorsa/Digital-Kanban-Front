import { useContext } from "react";
import { useHistory } from "react-router";
import UserContext from "../../../store/Auth/user-context";
import SessionContext from "../../../store/Session/session-context";
import * as ROUTES from "../../../constants/routes";

const SignOutButton = () => {
  const userCtx = useContext(UserContext);
  const dataCtx = useContext(SessionContext);
  const history = useHistory();

  const logoutHandler = () => {
    userCtx.removeUser();
    dataCtx.removeData();
    history.push(ROUTES.LANDING);
  };

  return (
    <button type="button" onClick={logoutHandler}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
