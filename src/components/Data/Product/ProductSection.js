import ProductSquare from "./ProductSquare";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import SessionContext from "../../../store/Session/session-context";
import * as ROUTES from "../../../constants/routes";
import classes from "./Product.module.css";

const ProductSection = (props) => {
  const history = useHistory();
  const dataCtx = useContext(SessionContext);

  const onSelectHandler = (product) => {
    console.log(product);
    dataCtx.selectProduct(product);
    history.push(ROUTES.STATIONS);
    // console.log(product_id);
  };

  return (
    <ul className={classes.container}>
      {props.products.map((item) => (
        <ProductSquare
          key={item.product_id}
          product={item}
          onSelect={onSelectHandler}
        />
      ))}
    </ul>
  );
};

export default ProductSection;
