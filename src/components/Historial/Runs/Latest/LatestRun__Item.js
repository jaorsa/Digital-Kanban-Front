import classes from "./LatestRun__Item.module.css";
import Menu from "../../../UI/Menu/Menu";
import { useState } from "react";

const LatestRun__Item = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const dateString = props.run.updatedAt;
  const newDate = new Date(dateString);
  const now = new Date();
  var seconds = Math.floor((now - newDate) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  const selectHandler = () => {
    props.onSelect(props.id);
  };

  const menuHandler = () => {
    console.log("Display menu");
    setShowMenu(true);
  };
  const editHandler = () => {
    console.log("Editing...");
    setShowMenu(false);
  };

  const deleteHandler = () => {
    console.log("Deleting...");
    setShowMenu(false);
  };

  return (
    <div>
      <button className={classes.button__menu} onClick={menuHandler}>
        ...
      </button>
      {showMenu && (
        <Menu onClickEdit={editHandler} onClickDelete={deleteHandler} />
      )}
      <li className={classes.run__item} onClick={selectHandler}>
        {/* <div className={classes.content}> */}
        <h3 className={classes.title}>Run {props.run.run_id}</h3>
        <p>
          Last Updated: {days} days {hours} hours {minutes} minutes {seconds}.
          seconds ago
        </p>
        {/* </div> */}
      </li>
    </div>
  );
};

export default LatestRun__Item;
