import React, { Component } from "react";
import classes from "./Runs.module.css";
import RunsList from "./RunsList";

const Runs = (props) => <RunsPage />;

const DUMMY_DATA = [
  {
    id: 1,
    reference: 'Reduced Batches Run',
    start_time: 'XX:XX:XX',
    end_time: 'XX:XX:XX',
  },
  {
    id: 2,
    reference: 'Reduced Batches Run',
    start_time: 'XX:XX:XX',
    end_time: 'XX:XX:XX',
  },
];

class RunsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      runs: DUMMY_DATA,
    };
  }

  componentDidMount() {
    this.setState({ loading: true, runs: DUMMY_DATA });

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

  onClickHandler = id =>{
      console.log(id + 'received!');
  }

  render() {
    const { loading, runs } = this.state;
    return (
      <div className={classes.container}>
        <h1>Runs</h1>
        {/* {loading && <div>Loading ...</div>} */}
        <RunsList runs={runs} onClick={this.onClickHandler}/>
      </div>
    );
  }
}

export default Runs;
