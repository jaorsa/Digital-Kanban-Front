import React from 'react';
import './LayoutItem.css';

const LayoutItem = (props) => {

    const selectHandler = () =>{
        props.onSelect(props.id);
    };

    return (
        <li className="layout--item" onClick={selectHandler}>
            {props.children}
        </li>
    );
};

export default LayoutItem;
