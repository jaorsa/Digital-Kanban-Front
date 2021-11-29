import classes from "./User__Item2.module.css";

const User__Item = (props) => {
  const clickHandler = () => {
    console.log("click");
  };

  return props.users.map((user) => (
    <section
      onClick={clickHandler}
      className={`${classes.row__fadeIn__wrapper}`}
    >
      <article className={`${classes.row} ${classes.fadeIn} ${classes.nfl}`}>
        <ul>
          <li>{user.first_name}</li>
          <li>{user.last_name}</li>
          <li>{!!user.major ? user.major : "null"}</li>
          <li>{!!user.class ? user.class : "null"}</li>
          <li>
            {user.role_id === 5
              ? "Administrador"
              : user.role_id === 6
              ? "Profesor"
              : "Estudiante"}
          </li>
          <li>{user.email}</li>
          <li>
            {!!user.id_telegram
              ? user.id_telegram.toString().substring(0, 3)
              : "XXX"}
            XXXXX
          </li>
        </ul>
        <ul className={classes.more__content}>
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
    </section>
  ));
};

export default User__Item;
