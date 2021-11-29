import { Link } from "react-router-dom";
import Card from "../../UI/Card/Card";
import * as ROUTES from "../../../constants/routes";

const ProductSquare = (props) => {
  const onSelectHandler = () => {
    props.onSelect("product_id " + props.product.product_id);
  };

  return (
    <li onClick={onSelectHandler}>
      <Link to={ROUTES.ACCOUNT} style={{ textDecoration: "none" }}>
        <Card className="product-item">
          <h1>{props.product.name}</h1>
          <h3>{props.product.weight}</h3>
        </Card>
      </Link>
    </li>
  );
};

export default ProductSquare;
