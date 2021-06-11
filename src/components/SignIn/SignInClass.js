import { Component, useContext } from "react";
import UserForm from "./UserForm";
import UserContext from "../Session/user-context";
import * as ROUTES from '../../constants/routes';
import { useHistory } from 'react-router-dom';

const SignInPage = () => {
    const userCtx = useContext(UserContext);
    const history = useHistory();

    const onSaveHandler = (data) => {
        userCtx.addUser(data);
        history.push(ROUTES.LANDING);
    }

    const onCancelHandler = () => {
      history.push(ROUTES.LANDING);
    }

    return <>
    <h1>SignUp</h1>
    <SignIn onSave={onSaveHandler} onCancel={onCancelHandler}/>
  </>
};

const INITIAL_STATE = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  error: null,
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onSubmitHandler = (username, password) => {
    const data = {
      username: username,
      password: password,
    };
    fetch(`API`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error:", err));
  };

  onTrial = (username, password) => {
    const data = {
      username: username,
      password: password,
    };
    this.props.onSave(data);
    this.setState({ ...INITIAL_STATE });
    // this.props.history.push(ROUTES.HOME);
  };

  render() {
    return <UserForm onCancel={this.props.onCancel} onSave={this.onTrial} />;
  }
}

export default SignInPage;
