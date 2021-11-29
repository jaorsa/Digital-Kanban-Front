import ProductSquare from "./ProductSquare";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import SessionContext from "../../../store/Session/session-context";
import * as ROUTES from "../../../constants/routes";
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
    <ul className="product-section">
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
