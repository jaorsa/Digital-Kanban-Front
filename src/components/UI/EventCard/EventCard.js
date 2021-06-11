import React from 'react';
import classes from './EventCard.module.css';

const EventCard = props => {
    return <div className={`${classes.card} ${props.className}`}>
        <label>{props.label}</label>
    </div>
}

export default EventCard;