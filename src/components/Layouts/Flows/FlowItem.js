import React from "react";
import FlowCard from "../../UI/FlowCard/FlowCard";
import classes from "./FlowItem.module.css";

const FlowItem = (props) => (
  <li className={classes.flow_item}>
    <div className={classes.summary}>
      <h4>{props.flow}</h4>
      <h5>{props.wip}</h5>
      <FlowCard label={props.quantity} className={classes.action} />
    </div>
    <div className={classes.summary}>
        <h4>TC: {props.tc}</h4>
        <h5>Station: {props.station}</h5>
    </div>
  </li>
);

export default FlowItem;
