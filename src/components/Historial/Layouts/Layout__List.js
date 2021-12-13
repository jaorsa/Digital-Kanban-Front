import Layout__Item from "./Layout__Item";
import classes from "./Layout__Item.module.css";

const Layout__List = (props) => {
  return (
    <>
      <h2>
        <strong>Latest Layouts</strong>
      </h2>
      <ul className={classes.container}>
        {props.layouts.map((item) => (
          <Layout__Item
            key={item.layout_id}
            id={item.layout_id}
            layout={item}
            onSelect={props.onSelectItem}
          />
        ))}
      </ul>
    </>
  );
};

export default Layout__List;
