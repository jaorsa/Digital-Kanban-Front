import { useReducer } from "react";
import UserContext from "./user-context";

const defaultUserState = {
  auth: null,
  admin: 1,
};

const userReducer = (state, action) => {
  if (action.type === "ADD_USER") {
    const authUser = action.auth;
    console.log("changing..." + authUser);
    return { ...defaultUserState, auth: authUser };
  }
  if (action.type === "REMOVE_USER") {
    return defaultUserState;
  }
  // return defaultUserState;
};

const AuthUserProvider = (props) => {
  const initialUser = localStorage.getItem("auth");
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const loginHandler = (user) => {
    dispatchUserAction({ type: "ADD_USER", auth: user });
    localStorage.setItem("auth", user);
  };

  const removeUserHandler = () => {
    dispatchUserAction({ type: "REMOVE_USER" });
    localStorage.removeItem("auth");
  };

  const userContext = {
    auth: userState.auth,
    admin: userState.admin,
    addUser: loginHandler,
    removeUser: removeUserHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default AuthUserProvider;
