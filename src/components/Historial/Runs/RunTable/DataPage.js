import { Component, useContext } from "react";
import axios from "axios";
import SessionContext from "../../../../store/Session/session-context";
import RunByLayout from "./RunByLayout";
import Buttons from "../../../Layouts/Runs/Trial/Buttons";
import Loading from "../../../UI/Loading/Loading";
import { Menu } from "../../../UI/Menu/Menu";
const DataPage = () => {
  const sessionCtx = useContext(SessionContext);

  return (
    <>
      <p>Layout page</p>
      <Layout layout_id={sessionCtx.layout} />
    </>
  );
};

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      layout__runs: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/run").then((response) => {
      console.log(response.data);
      console.log(this.props.layout_id);

      const data = response.data.filter(
        (item) => item.layout_id === this.props.layout_id
      );

      if (data.length > 0) {
        this.setState({
          loading: false,
          layout__runs: data,
        });
      }
      console.log("result runs ");
      console.log(data);
    });
  }

  componentWillUnmount() {}

  render() {
    const { loading, layout__runs } = this.state;

    return (
      <>
        {loading && <Loading />}
        {!loading && (
          <>
            {/* <p>loading...</p> */}
            <RunByLayout runs={layout__runs} />
            {/* <Buttons /> */}
          </>
        )}
      </>
    );
    // return <HistorialPage layouts={layouts} runs={latest__runs} />;
  }
}

export default DataPage;
