import { useReducer, useState } from "react";
import Card from "../../../UI/Card/Card";
import Input from "../../../UI/Input/Input";

const defaultBinInState = {
  material: 0,
  capacity: 0,
  kanban: 0,
};

const defaultBinOutState = {
  material: 0,
  capacity: 0,
  kanban: 0,
};

const binInReducer = (state, action) => {
  if (action.type === "ADD__MATERIAL") {
    const material__id = action.material__id;
    console.log("product_id stored..." + material__id);
    return { ...state, material: material__id };
  }
  if (action.type === "ADD__CAPACITY") {
    const capacity = action.capacity;
    console.log("capacity stored..." + capacity);
    return { ...state, capacity: capacity };
  }
  if (action.type === "ADD__KANBAN") {
    const kanban__id = action.kanban__id;
    console.log("kanban_id stored..." + kanban__id);
    return { ...state, kanban: kanban__id };
  }
};

const binOutReducer = (state, action) => {
  if (action.type === "ADD__MATERIAL") {
    const material__id = action.material__id;
    console.log("product_id stored..." + material__id);
    return { ...state, material: material__id };
  }
  if (action.type === "ADD__CAPACITY") {
    const capacity = action.capacity;
    console.log("capacity stored..." + capacity);
    return { ...state, capacity: capacity };
  }
  if (action.type === "ADD__KANBAN") {
    const kanban__id = action.kanban__id;
    console.log("kanban_id stored..." + kanban__id);
    return { ...state, kanban: kanban__id };
  }
};

const NewStation = (props) => {
  const [stationName, setStationName] = useState("");
  const [operatorState, setNewOperator] = useState(0);
  const [nextStation, setNextStation] = useState(0);
  const [binInState, dispatchBinInAction] = useReducer(
    binInReducer,
    defaultBinInState
  );
  const [binOutState, dispatchBinOutAction] = useReducer(
    binOutReducer,
    defaultBinOutState
  );
  const [formIsValid, setFormState] = useState(false);

  const changeHandler = () => {
    props.onChange({
      station: stationName,
      operator: operatorState,
      inmaterial: binInState.material,
      incapacity: binInState.capacity,
      inkanban: binInState.kanban,
      outmaterial: binOutState.material,
      outcapacity: binOutState.capacity,
      outkanban: binOutState.kanban,
      nextStation: nextStation,
    });
  };

  const stationNameChangeHandler = (event) => {
    setStationName(event.target.value);
    changeHandler();
  };

  const operatorChangeHandler = (event) => {
    setNewOperator(event.target.value);
    changeHandler();
  };

  const nextStationChangeHandler = (event) => {
    setNextStation(event.target.value);
    changeHandler();
  };

  const materialChangeHandler = (event) => {
    dispatchBinInAction({
      type: "ADD__MATERIAL",
      material__id: event.target.value,
    });
    changeHandler();
  };

  const capacityChangeHandler = (event) => {
    dispatchBinInAction({
      type: "ADD__CAPACITY",
      capacity: event.target.value,
    });
    changeHandler();
  };

  const kanbanChangeHandler = (event) => {
    dispatchBinInAction({
      type: "ADD__KANBAN",
      kanban__id: event.target.value,
    });
    changeHandler();
  };

  const outMaterialChangeHandler = (event) => {
    dispatchBinOutAction({
      type: "ADD__MATERIAL",
      material__id: event.target.value,
    });
    changeHandler();
  };

  const outCapacityChangeHandler = (event) => {
    dispatchBinOutAction({
      type: "ADD__CAPACITY",
      capacity: event.target.value,
    });
    changeHandler();
  };

  const outKanbanChangeHandler = (event) => {
    dispatchBinOutAction({
      type: "ADD__KANBAN",
      kanban__id: event.target.value,
    });
    changeHandler();
  };

  return (
    <Card>
      <Input
        label="Station Name"
        type="text"
        name="station name"
        value={stationName}
        onChange={stationNameChangeHandler}
        placeholder="Station X"
      />
      <label>Operator </label>
      <select name="operator" onChange={operatorChangeHandler}>
        {props.operators.map((user) => (
          <option value={user.user_id}>
            {[user.first_name, user.last_name].join(" ")}
          </option>
        ))}
      </select>

      {/* Bin de entrada */}
      <Card>
        <h3>InBin</h3>
        <label>Product </label>
        <select name="product" onChange={materialChangeHandler}>
          {props.products.map((item) => (
            <option value={item.product_id}>{item.name}</option>
          ))}
        </select>
        <Input
          label="Capacity"
          type="number"
          placeholder="0"
          name="capacity"
          value={binInState.capacity}
          onChange={capacityChangeHandler}
        />
        <label>Kanban </label>
        <select label="Kanban" name="kanban" onChange={kanbanChangeHandler}>
          {props.kanbans.map((item) => (
            <option value={item.kanban_id}>{item.name}</option>
          ))}
        </select>
      </Card>
      {/* Bin de salida */}
      <Card>
        <h3>OutBin</h3>
        <label>Product </label>
        <select
          label="Product"
          name="product"
          onChange={outMaterialChangeHandler}
        >
          {props.products.map((item) => (
            <option value={item.product_id}>{item.name}</option>
          ))}
        </select>
        <Input
          label="Capacity"
          type="number"
          placeholder="0"
          name="capacity"
          value={binOutState.capacity}
          onChange={outCapacityChangeHandler}
        />
        <label>Kanban </label>
        <select label="Kanban" name="kanban" onChange={outKanbanChangeHandler}>
          {props.kanbans.map((item) => (
            <option value={item.kanban_id}>{item.name}</option>
          ))}
        </select>
      </Card>
      <label>Next Station </label>
      <select label="Next station" onChange={nextStationChangeHandler}>
        {props.stations.map((item) => (
          <option value={item.station_id}>{item.name}</option>
        ))}
      </select>
    </Card>
  );
};

export default NewStation;
