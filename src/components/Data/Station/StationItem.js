import Card from "../../UI/Card/Card";
import classes from "./StationItem.module.css";

const StationItem = (props) => {
  const onClickHandler = () => {
    console.log("station_id " + props.item.station_id);
    props.onSelect(props.item);
  };

  return (
    <li onClick={onClickHandler}>
      <div className={classes.card}>
        <div className={`${classes.face} ${classes.face1}`}>
          <div className={classes.content}>
            <span className={classes.stars}></span>
            <h2 className={classes.java}>Variables</h2>
            <p className={classes.java}>
              Tiempo de transporte: 256 sec
              <br></br>
              Tiempo de takt: 4,500 sec
              <br></br>
              Tiempo de ciclo: 22,350 sec
            </p>
          </div>
          <div className={`${classes.face} ${classes.face2}`}>
            <h2>
              {props.item.name.length < 10
                ? props.item.name
                : props.item.name.substring(0, 10)}
            </h2>
          </div>
        </div>
        {/* <button onClick={clickHandler}>Delete User</button> */}
      </div>
    </li>
  );
};

export default StationItem;
