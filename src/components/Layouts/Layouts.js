import React from "react";
import Events from "./Events/Events";
import Flows from "./Flows/Flows";
import UserContext from "../Session/user-context";
import Runs from "./Runs/Runs";
import LayoutsList from "./LayoutsList";
const Layouts = props => (
  <>
    <UserContext.Consumer>
      {(user) =>
        !!user.auth ? (
          <> 
            <LayoutsList layouts={props.layouts}/>
            <Runs />
            <Events />
            <Flows />
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
