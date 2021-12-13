import axios from "axios";
import NewLayoutForm from "./LayoutForm";
import React from "react";
import toast from "react-hot-toast";
import * as ROUTES from "../../../../constants/routes";
import { useHistory } from "react-router-dom";

const New__Layout = () => {
  const history = useHistory();
  return (
    <>
      <p>New Layout</p>
      <NewItem__Layout history={history} />
    </>
  );
};

class NewItem__Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productos: [],
      usuarios: [],
      estaciones: [],
      kanban: [],
    };
  }

  async componentDidMount() {
    const products = await axios.get("http://localhost:3001/product");
    const kanbans = await axios.get("http://localhost:3001/kanban");
    const operators = await axios.get("http://localhost:3001/user");
    const stations = await axios.get("http://localhost:3001/station");

    this.setState({
      productos: products.data,
      usuarios: operators.data,
      estaciones: stations.data,
      kanban: kanbans.data,
    });
  }

  SaveDataHandler(title, array) {
    console.log(title);
    const data = array[array.length - 1];
    console.log(data);

    const layout = {
      name: title,
      user_id: parseInt(data.operator, 10),
    };

    const drawerIn = {
      capacity: parseInt(data.incapacity, 10),
      product_id: parseInt(data.inmaterial, 10),
      kanban_id: parseInt(data.inkanban, 10),
      counter: 0,
    };

    const drawerOut = {
      capacity: parseInt(data.outcapacity, 10),
      product_id: parseInt(data.outmaterial, 10),
      kanban_id: parseInt(data.outkanban, 10),
      counter: 0,
    };
    console.log(layout);
    axios
      .post("http://localhost:3001/layout", layout)
      .then((res) => console.log(res));

    axios
      .post("http://localhost:3001/drawer", drawerIn)
      .then((res) => console.log(res));
    axios
      .post("http://localhost:3001/drawer", drawerOut)
      .then((res) => console.log(res));
    toast.success("Layout was successfully created!");
    this.props.history.push(ROUTES.DATA);
  }

  render() {
    const { productos, usuarios, estaciones, kanban } = this.state;
    return (
      <NewLayoutForm
        products={productos}
        operators={usuarios}
        stations={estaciones}
        kanbans={kanban}
        onSave={this.SaveDataHandler}
      />
    );
  }
}

export default New__Layout;
