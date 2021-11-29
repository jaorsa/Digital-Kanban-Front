import React, {useState} from 'react';
import user from '../../constants/user';
import LayoutList from './LayoutList';
import './LayoutList.css';
import TrialItem from './Trial';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';




const HistorialPage = props => {
    const history = useHistory();

    const SelectItemHandler = layoutId => {
        console.log("layout: " + layoutId);
        user.layout_id = layoutId;
        history.push(ROUTES.DATA);
        };

    let content = (
        <p style={{textAlign: `center` }}> No layout found </p> 
    );

    if(props.items.length > 0 ){
        content = (
            // <TrialItem items={props.items} onSelect={SelectItemHandler}/>
            // <LayoutItem key={props.items[0].layout_id} id={props.items[0].layout_id} item={props.items[0]} />
            <LayoutList layouts={props.items} onSelectItem={SelectItemHandler} />
        );
    }

    return(
        <div className="layouts">
            {/* <p>asasasa</p> */}
                {content}
                {/* <LayoutList layouts={props.items} onSelectItem={SelectItemHandler} /> */}
        </div>
    );
};

export default HistorialPage;