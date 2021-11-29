import { Component, useContext } from "react";
import { CSVLink } from "react-csv";

// import * as ROUTES from '../../constants/routes';
import { useHistory } from "react-router-dom";
import axios from "axios";
import user from "../../../constants/user";
// import HistorialPage from "./HistorialPage";
import "./Data.css";

const DataPage = () => {
  // const userCtx = useContext(UserContext);
  return (
    <>
      <h1>Data Page</h1>
      <Data />
    </>
  );
};

class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      runs: [],
      data: [],
      headers: [
        { label: "DataId", key: "data_id" },
        { label: "# Run", key: "run_id" },
        { label: "Drawer", key: "drawer_id" },
        { label: "Value", key: "value" },
        { label: "Created Time", key: "createdAt" },
        { label: "Last Update", key: "updatedAt" },
      ],
    };
  }

  async componentDidMount() {
    var run = [];
    await axios
      .get("http://localhost:3001/run", { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        run = res.data;
        var result = res.data.filter(
          (item) => item.layout_id === user.layout_id
        );
        if (result !== undefined) {
          console.log("result runs " + result);
        }
        this.setState({ loading: true, runs: result, data: [] });
      });

    axios
      .get("http://localhost:3001/data", { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        var resultado = res.data.filter((item) => !run.includes(item));
        if (resultado !== undefined) {
          console.log("result data " + resultado);
          this.setState({ loading: true, runs: run, data: resultado });
        }
      });
  }

  componentWillUnmount() {}

  render() {
    const { loading, runs, data, headers } = this.state;

    const csvReport = {
      filename: "Report.csv",
      headers: headers,
      data: data,
    };
    return (
      <>
        {loading && <p>Loading...</p>}
        <table>
          <th>DataId</th>
          <th># Run</th>
          <th>Drawer</th>
          <th>Value</th>
          <th>Created Time</th>
          <th>Last Updated</th>
          {/* <tr key={"header"}>
                {Object.keys(this.state[0]).map((key)=> (
                    <th>{key}</th>
                ))}
            </tr> */}
          {data.map((item) => (
            <tr key={item.data_id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </table>
        <CSVLink className="csv-link" {...csvReport}>
          Export to CSV
        </CSVLink>
      </>
    );
  }
}

export default DataPage;
