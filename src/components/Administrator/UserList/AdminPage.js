import axios from "axios";
import { Component } from "react";
import Loading from "../../UI/Loading/Loading";
import UserTablePage from "./UserTablePage";

const AdminPage = () => {
  return (
    <>
      <div className="expenses">
        <p>Admin</p>
        <Admin />
      </div>
    </>
  );
};

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/user", { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          this.setState({ loading: false, users: res.data });
        }
      });
  }

  componentWillUnmount() {}

  render() {
    const { loading, users } = this.state;
    return (
      <>
        {loading && <Loading />}
        {!loading && <UserTablePage users={users} />}
      </>
    );
  }
}

export default AdminPage;
