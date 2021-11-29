import { Component, useContext } from "react";

import UserContext from "../../store/Auth/user-context";
// import UpdateUser from "./AccountPage";
import * as ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom";
import axios from "axios";
import user from "../../constants/user";
import HistorialPage from "./HistorialPage";

const RunPage = () => {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  return (
    <>
      <h1>Historial Page</h1>
      <Historial />
    </>
  );
};

class Historial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      layouts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/layout", { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        var result = res.data.filter(
          (item) => item.user_id === user.data.user_id
        );

        if (result !== undefined) {
          console.log("result data " + result);
        }
        this.setState({ loading: true, layouts: result });
      });
  }

  componentWillUnmount() {}

  render() {
    const { loading, layouts } = this.state;
    return <HistorialPage items={layouts} />;
  }
}

export default RunPage;
