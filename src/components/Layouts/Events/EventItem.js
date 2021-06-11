import React from "react";
import EventCard from "../../UI/EventCard/EventCard";
import classes from "./EventItem.module.css";

const EventItem = (props) => (
  <li className={classes.event_item}>
    <div className={classes.summary}>
      <h3>Buffer: {props.buffer}</h3>
      <EventCard label={props.action} className={classes.action} />
    </div>
    <h4>Created at: {props.created_at}</h4>
  </li>
);

export default EventItem;
