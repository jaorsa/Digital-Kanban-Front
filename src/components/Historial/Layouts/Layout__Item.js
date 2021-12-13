import classes from "./Layout__Item.module.css";

const Layout__Item = (props) => {
  const dateString = props.layout.updatedAt;
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
  };

  return (
    <div>
      <button className={classes.button__menu} onClick={menuHandler}>
        ...
      </button>
      <li className={classes.layout__item} onClick={selectHandler}>
        {/* <div className={classes.content}> */}
        <h3 className={classes.title}>{props.layout.name}</h3>
        <p>
          Last Updated: {days} days {hours} hours {minutes} minutes {seconds}.
          seconds ago
        </p>
        {/* </div> */}
      </li>
    </div>
  );
};

export default Layout__Item;
