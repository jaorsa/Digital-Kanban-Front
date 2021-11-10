import React, { Component } from "react";
import Layouts from "./Layouts";
import classes from "./LayoutsPage.module.css";
import UserContext from "../Session/user-context";
import Events from "./Events/Events";
import Flows from "./Flows/Flows";
import Runs from "./Runs/Runs";

const LayoutsPage = (props) => (
  <UserContext.Consumer>
    {(user) => !!user.auth && <LayoutPage />}
  </UserContext.Consumer>
);

const DUMMY_DATA = [
  {
    id: 1,
    name: "First Layout",
  },
  {
    id: 2,
    name: "Layout New Design",
  },
];

class LayoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      layouts: DUMMY_DATA,
    };
  }

  componentDidMount() {
    this.setState({ loading: true, layouts: DUMMY_DATA });

    // this.props.firebase.users().on('value', snapshot => {
    //     const usersObject = snapshot.val();

    //     const userList = Object.keys(usersObject).map(key => ({
    //         ...usersObject[key],
    //         uid: key,
    //     }));

    //     this.setState((prevState) => {
    //         return{
    //             ...prevState,
    //             users: userList,
    //             loading: false,
    //         }
    //     });
    // });
  }

  componentWillUnmount() {}

  onClickHandler = (id) => {
    console.log(id + "received!");
  };

  render() {
    const { loading, layouts } = this.state;
    return (
      <>
        <div className={classes.all_container}>
          <div className={classes.container}>
            <h1>Layouts</h1>
            <Layouts layouts={layouts} />
          </div>
          <Runs />
          <div className={classes.report}>
            <Events />
            <Flows />
          </div>
        </div>
      </>
    );
  }
}

export default LayoutsPage;
