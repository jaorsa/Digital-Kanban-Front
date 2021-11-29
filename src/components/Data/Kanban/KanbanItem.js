import Card from "../../UI/Card/Card";
import classes from "./Kanban.module.css";

const KanbanItem = (props) => {
  const onClickHandler = () => {
    console.log("kanban_id..." + props.item.kanban_id);
    props.onSelect(props.item);
  };

  return (
    <li onClick={onClickHandler}>
      <Card className={classes.card}>
        <div className={`${classes.face} ${classes.face1}`}>
          <div className={classes.content}>
            <span className={classes.stars}></span>
            <h2 className={classes.java}>Variables</h2>
            <p className={classes.java}>Nemo occaecati eos soluta iusto.</p>
          </div>
          <div className={`${classes.face} ${classes.face2}`}>
            <h2>{props.item.name}</h2>
          </div>
        </div>
        {/* <button onClick={clickHandler}>Delete User</button> */}
      </Card>
    </li>
  );
};

export default KanbanItem;
