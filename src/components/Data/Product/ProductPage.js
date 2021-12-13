import React, { useState, Component } from "react";
import "./Section.css";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import axios from "axios";
import ProductInput from "../ProductInput.js/ProductInput";
import Button from "../../UI/Button/Button";

import ProductSection from "./ProductSection";
import Loading from "../../UI/Loading/Loading";
import classes from "./Product.module.css";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  const history = useHistory();
  const [showForm, setShow] = useState(false);

  const showHandler = () => {
    setShow(!showForm);
  };

  const addProductHandler = (name, weight) => {
    const data = {
      name: name,
      weight: weight,
    };

    axios.post("http://localhost:3001/product", data).then((res) => {
      console.log(res);
    });
    history.push(ROUTES.HOME);
    setShow(!showForm);
  };

  const onCancelHandler = () => {
    // history.push(ROUTES.LANDING);
    setShow(!showForm);
  };

  return (
    <React.Fragment>
      <p>asdasds</p>
      <div className={classes.product__section}>
        <h1 className={classes.title}>PRODUCTS</h1>
        <b className={classes.hr}></b>
        {!showForm && (
          <div className={classes.material}>
            <Button onClick={showHandler}>Add New Material</Button>
          </div>
        )}
        {showForm && (
          <ProductInput
            onAddProduct={addProductHandler}
            onCancel={onCancelHandler}
          />
        )}
        <ProductPage />
      </div>
    </React.Fragment>
  );
};

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
    };
  }

  componentDidMount() {
    // get stations filtered by user_id

    // get all input concat output drawers

    // obtain products

    //get products and filter

    axios
      .get("http://localhost:3001/product", { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        this.setState({ loading: true, products: res.data });
      });
    // this.setState({ loading: true, products: DUMMY_DATA });
  }

  render() {
    const { loading, products } = this.state;
    return (
      <div className={classes.products}>
        {!loading && <Loading />}
        {loading && <ProductSection products={products} />}
      </div>
    );
  }
}

export default Products;
