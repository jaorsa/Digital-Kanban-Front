import LatestRun__Item from "./LatestRun__Item";
import classes from "./LatestRun__Item.module.css";

const LatestRun__List = (props) => {
  return (
    <>
      <h2>
        <strong>Last Updated Runs</strong>
      </h2>
      <ul className={classes.container}>
        {props.runs.map((item) => (
          <LatestRun__Item
            key={item.run_id}
            id={item.run_id}
            run={item}
            onSelect={props.onSelectItem}
          />
        ))}
      </ul>
    </>
  );
};

export default LatestRun__List;
