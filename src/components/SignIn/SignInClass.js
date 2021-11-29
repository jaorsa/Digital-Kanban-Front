import React, { Component, useContext } from "react";

import UserContext from "../../store/Auth/user-context";
import UserForm from "./UserForm";
import * as ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom";
import axios from "axios";
import user from "../../constants/user";
import Loading from "../UI/Loading/Loading";

const SignInPage = () => {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  const onSaveHandler = (data) => {
    userCtx.addUser(data);
    history.push(ROUTES.HOME);
  };

  const onCancelHandler = () => {
    history.push(ROUTES.LANDING);
  };

  return (
    <>
      <p>SignUp</p>
      <SignIn onSave={onSaveHandler} onCancel={onCancelHandler} />
    </>
  );
};

const INITIAL_STATE = {};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/user", { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        this.setState({ loading: true, users: res.data });
      });
  }

  componentWillUnmount() {}

  onSubmitHandler = (email, first_name) => {
    const data = {
      email: email,
      first_name: first_name,
    };
    const result = this.state.users.filter(
      (user) => data.email === user.email && data.first_name && user.first_name
    );
    if (result.length > 0) {
      this.props.onSave(result[0]);
      user.data = result[0];
      console.log(result);
      console.log("User: " + user.data.user_id);
    }
  };

  // onTrial = (username, password) => {
  //   const data = {
  //     username: username,
  //     password: password,
  //   };
  //   this.props.onSave(data);
  //   this.setState({ ...INITIAL_STATE });
  //   // this.props.history.push(ROUTES.HOME);
  // };

  render() {
    return (
      <React.Fragment>
        {!this.state.loading && <Loading />}
        {this.state.loading && (
          <UserForm
            onCancel={this.props.onCancel}
            onSave={this.onSubmitHandler}
          />
        )}
      </React.Fragment>
    );
  }
}

export default SignInPage;
