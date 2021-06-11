import classes from "./EventsList.module.css";
import React from "react";
import EventItem from "./EventItem";

const EventsList = (props) => {
  return (
    <ul className={classes.events}>
      {props.events.map((event) => (
        <EventItem
          key={event.id}
          buffer={event.buffer}
          created_at={event.created_at}
          action={event.action}
        />
      ))}
    </ul>
  );
};

export default EventsList;
