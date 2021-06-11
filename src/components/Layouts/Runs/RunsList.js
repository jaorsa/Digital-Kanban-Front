import classes from "./RunsList.module.css";
import React from "react";
import RunItem from "./RunItem";

const RunsList = (props) => {
  const onClickHandler = (id) => {
    props.onClick(id);
  };

  return (
    <ul className={classes.runs}>
      {props.runs.map((run) => (
        <RunItem
          onClick={onClickHandler}
          key={run.id}
          reference={run.reference}
          start_time={run.start_time}
          end_time={run.end_time}
        />
      ))}
    </ul>
  );
};

export default RunsList;
