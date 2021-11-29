import React from 'react';
import './LayoutItem.css';
const TrialItem = (props) => {
    const selectHandler = () =>{
        props.onSelect(props.layout_id);
    };

    return (
        <div className="layouts">
        <ul className="layout-list">
            
            {props.items.map(item => (
                <li className="layout-item" onClick={selectHandler}>
                {/* {console.log("item " + props.item)} */}
                <h2>{item.name}</h2>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default TrialItem;