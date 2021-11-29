import { Component, useContext } from "react";

import UserContext from "../../store/Auth/user-context";
import UpdateUser from "./AccountPage";
import * as ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditAccountPage = () => {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  const onSaveHandler = (data) => {
    // userCtx.addUser(data);
    history.push(ROUTES.LANDING);
  };

  const onCancelHandler = () => {
    history.push(ROUTES.LANDING);
  };

  return (
    <>
      <p>Account Page</p>
      <Account
        user={userCtx.auth}
        onSave={onSaveHandler}
        onCancel={onCancelHandler}
      />
    </>
  );
};

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      user_id: props.user_id,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onSubmitHandler = (email, first, last, major, telegram) => {
    const data = {
      first_name: first,
      last_name: last,
      id_telegram: telegram,
      major: major,
      role_id: 5,
      email: email,
    };
    axios
      .put(`http://localhost:3001/user/${this.props.user.user_id}`, data)
      .then((res) => {
        console.log(res);

        this.props.onSave(data);
      });
  };

  onTrial = (email, first, last, major, telegram) => {
    const data = {
      first_name: first,
      last_name: last,
      id_telegram: telegram,
      major: major,
      role_id: 5,
      email: email,
    };
    this.props.onSave(data);
  };

  render() {
    return (
      <UpdateUser
        user={this.props.user}
        onCancel={this.props.onCancel}
        onSave={this.onSubmitHandler}
      />
    );
  }
}

export default EditAccountPage;
