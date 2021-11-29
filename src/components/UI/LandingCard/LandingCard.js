import classes from "./LandingCard.module.css";
import { Link } from "react-router-dom";

const LandingCard = (props) => {
  return (
    <Link to={props.link} className={`${classes.link}`}>
      <div className={`${classes.card}`}>
        <div className={`${classes.face} ${classes.face1}`}>
          <div className={`${classes.content}`}>
            <img src={props.pic} />
            <h3>{props.title}</h3>
          </div>
        </div>
        <div className={`${classes.face} ${classes.face2}`}>
          <div className={`${classes.content}`}>
            <p>{props.description}</p>
            <a href={props.link}>{props.link__title}</a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LandingCard;
