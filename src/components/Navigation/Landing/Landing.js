import classes from "./Landing.module.css";
import UserContext from "../../../store/Auth/user-context";
import { useContext } from "react";
import LandingCard from "../../UI/LandingCard/LandingCard";
import * as ROUTES from "../../../constants/routes";

const Landing = () => {
  const userCtx = useContext(UserContext);

  var content = <p>No user found. Please Login</p>;

  if (!!userCtx.auth) {
    if (userCtx.auth.role_id === 5) {
      content = <LandingAdminPage />;
    } else {
      content = <LandingUserPage />;
    }
  }

  return <>{content}</>;
};

const LandingUserPage = () => {
  return (
    <div className={`${classes.body}`}>
      <div className={`${classes.container}`}>
        {/* Historial */}
        <LandingCard
          link__title="Read More"
          link={ROUTES.RUNS}
          description="Ver toda la información de las últimas corridas"
          title="Historial"
          pic="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
        />
        {/* Productos */}
        <LandingCard
          link__title="Read More"
          link={ROUTES.PROD}
          description="Accede a Productos, Estaciones y Kanbans"
          title="Productos"
          pic="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
        />
      </div>
    </div>
  );
};

const LandingAdminPage = () => {
  return (
    <div className={`${classes.body}`}>
      <div className={`${classes.container}`}>
        {/* Historial */}
        <LandingCard
          link__title="Read More"
          link={ROUTES.RUNS}
          description="Ver toda la información de las últimas corridas"
          title="Historial"
          pic="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
        />
        {/* Productos */}
        <LandingCard
          link__title="Read More"
          link={ROUTES.PROD}
          description="Accede a Productos, Estaciones y Kanbans"
          title="Productos"
          pic="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
        />
        {/* Administrar usuarios */}
        <LandingCard
          link__title="Read More"
          link={ROUTES.ADMIN}
          description="Administra a tus usuarios"
          title="Usuarios"
          pic="https://img.icons8.com/ios/250/FFFFFF/user.png"
        />
      </div>
    </div>
  );
};

export default Landing;
