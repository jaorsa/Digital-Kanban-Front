import { Component, useContext } from "react";
import NewUser from "./NewUser";
import UserContext from "../Session/user-context";
import * as ROUTES from '../../constants/routes';
import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
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
    <SignUp onSave={onSaveHandler} onCancel={onCancelHandler}/>
  </>
};

const INITIAL_STATE = {
  username: "",
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

  onSubmitHandler = (username, first, last, password) => {
    const data = {
      username: username,
      first_name: first,
      last_name: last,
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

  onTrial = (username, first, last, password) => {
    const data = {
      username: username,
      first_name: first,
      last_name: last,
      password: password,
    };
    this.props.onSave(data);
    this.setState({ ...INITIAL_STATE });
    // this.props.history.push(ROUTES.HOME);
  };

  render() {
    return <NewUser onCancel={this.props.onCancel} onSave={this.onTrial} />;
  }
}

export default SignUpPage;
