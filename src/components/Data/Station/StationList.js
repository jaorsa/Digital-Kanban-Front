import StationItem from "./StationItem";
// import "./StationItem.css";
import classes from "./StationItem.module.css";
import * as ROUTES from "../../../constants/routes";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import SessionContext from "../../../store/Session/session-context";

const StationList = (props) => {
  const history = useHistory();
  const dataCtx = useContext(SessionContext);

  const onSelectHandler = (item) => {
    console.log(item);
    dataCtx.selectStation(item);
    history.push(ROUTES.KANBANS);
  };

  return (
    <div className={classes.stations}>
      <ul className={classes.container}>
        {props.stations.map((item) => (
          <StationItem
            key={item.station_id}
            item={item}
            onSelect={onSelectHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default StationList;
