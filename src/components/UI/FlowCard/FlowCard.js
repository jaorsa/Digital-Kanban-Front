import React from 'react';
import classes from './FlowCard.module.css';

const FlowCard = props => {
    return <div className={`${classes.card} ${props.className}`}>
        <label>Quantity: {props.label}</label>
    </div>
}

export default FlowCard;