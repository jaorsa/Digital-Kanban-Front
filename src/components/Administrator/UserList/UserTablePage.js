import classes from "./User__Item2.module.css";
import User__Item from "./User__Item2";

const UserTablePage = (props) => {
  return (
    <section className={classes.wrapper}>
      {/* Row Titles */}
      <main className={`${classes.row} ${classes.title}`}>
        <ul>
          <li>Nombre</li>
          <li>Apellido</li>
          <li>Carrera</li>
          <li>Clase</li>
          <li>Rol</li>
          <li>Email</li>
          <li>Telegram</li>
        </ul>
      </main>
      <User__Item users={props.users} />
    </section>
  );
};

export default UserTablePage;
