import React from "react";
import UserContext from "../Session/user-context";
import LayoutsList from "./LayoutsList";
const Layouts = props => (
  <>
    <UserContext.Consumer>
      {(user) =>
        !!user.auth ? (
          <> 
            <LayoutsList layouts={props.layouts}/>
          </>
        ) : (
          <p>
            <h1>Loading</h1>
            <h1>Ingresa para ver el contenido</h1>
          </p>
        )
      }
    </UserContext.Consumer>
  </>
);

export default Layouts;
