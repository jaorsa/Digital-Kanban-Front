import React from "react";
import classes from "./RunItem.module.css";

const RunItem = (props) => {
    const onClickHandler = () => {
        props.onClick(props.key);
    }

    return <li onClick={onClickHandler} className={classes.run_item}>
      <h2>{props.reference}</h2>
      <h5>Iniciado a las {props.start_time}</h5>
      {!!props.end_time && <h5>Finalizado a las {props.end_time}</h5>}
  </li>
};

export default RunItem;
