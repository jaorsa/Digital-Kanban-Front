import React, { Component } from "react";
import classes from "./Flows.module.css";
import FlowsList from "./FlowsList";

const Flows = (props) => <FlowsPage />;

const DUMMY_DATA = [
  {
    id: 1,
    flow: 'Process 1 Starting',
    wip: "Extracting 2 objects in Buffer1",
    quantity: 6,
    tc: 50,
    station: "Station1",
  },
  {
    id: 2,
    flow: 'Process 1 finished. Going to Process 2',
    wip: "Adding 2 objects to Buffer4",
    quantity: 8,
    tc: 30,
    station: "Station3",
  },
  {
    id: 3,
    flow: 'Process 4 starting',
    wip: "Cutting boards in Buffer3",
    quantity: 3,
    tc: 80,
    station: "Station2",
  },
];

class FlowsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      flows: DUMMY_DATA,
    };
  }

  componentDidMount() {
    this.setState({ loading: true, flows: DUMMY_DATA });

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

  render() {
    const { loading, flows } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.control}>
          <h2>FLOW LOG</h2>
        </div>
        {/* {loading && <div>Loading ...</div>} */}
        <FlowsList flows={flows} />
      </div>
    );
  }
}

export default Flows;
