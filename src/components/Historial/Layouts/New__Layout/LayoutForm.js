import { useState } from "react";
import Input from "../../../UI/Input/Input";
import NewStation from "./AddStation";
import Card from "../../../UI/Card/Card";
import classes from "./LayoutForm.module.css";

//props include operators, materials and kanban
const NewLayoutForm = (props) => {
  const [title, setTitle] = useState("");
  const [stations, setInputStations] = useState([]);
  const [data, setNewData] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeStationHandler = (data) => {
    setNewData((beforeData) => [...beforeData, data]);
  };

  const addStation = (event) => {
    event.preventDefault();
    setInputStations((state) => [
      ...state,
      <NewStation
        onChange={changeStationHandler}
        stations={props.stations}
        kanbans={props.kanbans}
        products={props.products}
        operators={props.operators}
      />,
    ]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const returnData = [title, data];
    props.onSave(title, data);
  };

  return (
    <Card>
      <form>
        <Input
          label="Name"
          type="text"
          name="name"
          value={title}
          onChange={titleChangeHandler}
          placeholder="Creación de juegos de madera"
        />
        <p># Stations: {stations.length}</p>
        {stations.map((item) => item)}
        <button onClick={addStation}>Add Station</button>
        <button type="submit" onClick={submitHandler}>
          Submit Layout
        </button>
      </form>
    </Card>
  );
};

export default NewLayoutForm;
