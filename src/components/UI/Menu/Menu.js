import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <ul className={classes.menu__list}>
          <li onClick={props.onClickEdit} className={classes.menu__item}>
            <button className={classes.menu__button__edit}>Edit</button>
          </li>
          <li onClick={props.onClickDelete} className={classes.menu__item}>
            <button className={classes.menu__button__delete}>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
