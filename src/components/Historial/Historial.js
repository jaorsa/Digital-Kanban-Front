import { Component, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../store/Auth/user-context";
import axios from "axios";
import HistorialPage from "./HistorialPage";
import New__Layout from "./Layouts/New__Layout/New__Layout";

const HistorialCatalog = () => {
  const userCtx = useContext(UserContext);
  const [show, setShow] = useState(false);

  let content = <New__Layout />;

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <p>Historial</p>
      {!show && <button onClick={clickHandler}>Add New Layout</button>}
      {show && content}
      <Historial user_id={userCtx.auth.user_id} />
    </>
  );
};

class Historial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      layouts: [],
      latest__runs: [],
    };
  }

  async componentDidMount() {
    const layout__promise = await axios.get("http://localhost:3001/layout");
    const run__promise = await axios.get("http://localhost:3001/run");

    const layoutsByUser = layout__promise.data.filter(
      (item) => item.user_id === this.props.user_id
    );
    if (layoutsByUser !== undefined || layoutsByUser.length > 0) {
      console.log("result layouts ");
      console.log(layoutsByUser);

      const latest__runs = run__promise.data.filter((run) =>
        layoutsByUser.find((layout) => run.layout_id === layout.layout_id)
      );

      this.setState({
        loading: false,
        layouts: layoutsByUser,
        latest__runs: latest__runs,
      });
    }
  }

  componentWillUnmount() {}

  render() {
    const { loading, layouts, latest__runs } = this.state;
    // return <p>loading...</p>;
    return <HistorialPage layouts={layouts} runs={latest__runs} />;
  }
}

export default HistorialCatalog;
