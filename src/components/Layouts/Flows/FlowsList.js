import classes from "./FlowsList.module.css";
import React from "react";
import FlowItem from "./FlowItem";

const FlowsList = (props) => {
  return (
    <ul className={classes.flows}>
      {props.flows.map((flow) => (
        <FlowItem
          key={flow.id}
          flow={flow.flow}
          wip={flow.wip}
          quantity={flow.quantity}
          tc={flow.tc}
          station={flow.station}
        />
      ))}
    </ul>
  );
};

export default FlowsList;
