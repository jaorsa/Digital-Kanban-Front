import Card from "../../../UI/Card/Card";
import classes from "./RunTable.module.css";

const RunByLayout = (props) => {
  const content = <p>No Runs were found.</p>;

  return (
    <Card className={classes.container}>
      {props.runs.length === 0 && content}
      {props.runs.length > 0 && (
        <ul className={classes.content}>
          <h1>All Runs by Layout</h1>
          {props.runs.map((run) => (
            <li className={classes.run__item}>
              <h1>Run {run.run_id}</h1>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default RunByLayout;
