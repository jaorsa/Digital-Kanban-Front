
import React from "react";
import LayoutItem from './LayoutItem';
import classes from './LayoutsList.module.css';

const LayoutsList = (props) => {
  const onClickHandler = (id) => {
    props.onClick(id);
  };

  return (
    <ul className={classes.runs}>
      {props.layouts.map((layout) => (
        <LayoutItem
          onClick={onClickHandler}
          key={layout.id}
          name={layout.name}
        />
      ))}
    </ul>
  );
};

export default LayoutsList;
