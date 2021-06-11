import React, { Component } from "react";
import EventsList from "./EventsList";
import classes from "./Events.module.css";

const Events = (props) => <EventsPage />;

const DUMMY_DATA = [
  {
    id: 1,
    buffer: "XXXXXXXXXXXXXXX",
    created_at: new Date("2021-03-25").toISOString(),
    action: "REPLENISHED",
  },
  {
    id: 2,
    buffer: "ZZZZZZZZZZZZZZZ",
    created_at: new Date("2021-03-25").toISOString(),
    action: "CONSUMED",
  },
  {
    id: 3,
    buffer: "yyyyyyyyyyyyyyyy",
    created_at: new Date("2021-01-12").toISOString(),
    action: "EMPTY",
  },
];

class EventsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      events: DUMMY_DATA,
    };
  }

  componentDidMount() {
    this.setState({ loading: true, events: DUMMY_DATA });

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
    const { loading, events } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.control}>
          <h2>EVENT LOG</h2>
        </div>
        {/* {loading && <div>Loading ...</div>} */}
        <EventsList events={events} />
      </div>
    );
  }
}

export default Events;
