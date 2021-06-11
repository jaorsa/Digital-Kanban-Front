import React from "react";
import classes from './LayoutItem.module.css';

const LayoutItem = (props) => {
    const onClickHandler = () => {
        props.onClick(props.key);
    }

    return <li onClick={onClickHandler} className={classes.run_item}>
      <h2>{props.name}</h2>
  </li>
};

export default LayoutItem;
