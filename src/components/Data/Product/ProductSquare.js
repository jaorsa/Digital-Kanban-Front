import { Link } from "react-router-dom";
import Card from "../../UI/Card/Card";
import * as ROUTES from "../../../constants/routes";
import classes from "./Product.module.css";

const ProductSquare = (props) => {
  const onSelectHandler = () => {
    props.onSelect("product_id " + props.product.product_id);
  };

  return (
    <li onClick={onSelectHandler}>
      <Link to={ROUTES.ACCOUNT} style={{ textDecoration: "none" }}>
        <Card className={classes.card}>
          <div className={`${classes.face} ${classes.face1}`}>
            <div className={classes.content}>
              <span className={classes.stars}></span>
              <h2 className={classes.java}>Variables</h2>
              <p className={classes.java}>Nemo occaecati eos soluta iusto.</p>
            </div>
            <div className={`${classes.face} ${classes.face2}`}>
              <h2>{props.product.name}</h2>
            </div>
          </div>
          {/* <button onClick={clickHandler}>Delete User</button> */}
        </Card>
      </Link>
    </li>
  );
};

export default ProductSquare;
