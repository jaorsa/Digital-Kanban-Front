import { Component, useContext } from "react";
import NewUser from "./NewUser";
import UserContext from "../../store/Auth/user-context";
import * as ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom";
import axios from "axios";
import user from "../../constants/user";

const SignUpPage = () => {
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
      <h1>SignUp</h1>
      <SignUp onSave={onSaveHandler} onCancel={onCancelHandler} />
    </>
  );
};

const INITIAL_STATE = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  error: null,
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onCancelHandler = () => {
    this.props.history.push(ROUTES.HOME);
  };

  onSubmitHandler = (email, first, last, password) => {
    const data = {
      first_name: first,
      last_name: last,
      role_id: 5,
      email: email,
    };
    user.data = data;
    console.log(data);
    axios
      .post("http://localhost:3001/user", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.props.onSave(data);
      })
      .catch((err) => console.error("Error:", err));
  };

  onTrial = (email, first, last, password) => {
    const data = {
      email: email,
      first_name: first,
      last_name: last,
      password: password,
      role_id: 5,
    };
    this.props.onSave(data);
    this.setState({ ...INITIAL_STATE });
    // this.props.history.push(ROUTES.HOME);
  };

  render() {
    return (
      <NewUser onCancel={this.props.onCancel} onSave={this.onSubmitHandler} />
    );
  }
}

export default SignUpPage;
