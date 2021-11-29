import KanbanItem from "./KanbanItem";
import * as ROUTES from "../../../constants/routes";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import SessionContext from "../../../store/Session/session-context";
import classes from "./Kanban.module.css";

const KanbanList = (props) => {
  const history = useHistory();
  const dataCtx = useContext(SessionContext);

  const onSelectHandler = (item) => {
    console.log(item);
    dataCtx.selectKanban(item);
    history.push(ROUTES.REPORTS);
  };

  return (
    <div className={classes.kanbans}>
      <ul className={classes.container}>
        {props.kanbans.map((item) => (
          <KanbanItem
            key={item.kanban_id}
            item={item}
            onSelect={onSelectHandler}
          />
        ))}
      </ul>
    </div>
  );
};
export default KanbanList;
