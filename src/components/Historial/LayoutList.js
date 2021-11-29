import React from 'react';
import LayoutItem from './LayoutItem';
import './LayoutItem.css';

const LayoutList = (props) => {
    return(
        <ul className="layout--list">
            <h2>Last Runs</h2>
            {props.layouts.map(item =>
            (
                <LayoutItem
                key={item.layout_id}
                id={item.layout_id}
                item={item}
                onSelect={props.onSelectItem}
                >
                    {item.name}
                    <p></p>
                    {item.updatedAt}
                </LayoutItem>
            ))}
        </ul>
    );
};

export default LayoutList;