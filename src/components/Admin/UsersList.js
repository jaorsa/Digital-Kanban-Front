import React from 'react';
import UserItem from './UserItem';
// import './UsersList.css';

const UsersList = props => {

    if (props.items.length === 0) {
        return <h2 className="users-list__fallback">No se tienen usuarios registrados</h2>
    }

    const EditFormHandler = item => {
        console.log("Pasando por UserLists");
        props.onEditUser(item);
    };

    return(
        <ul className="users-list">
            {
                props.items.map( (item) => (
                    <UserItem 
                        key={item.uid}
                        user={item}
                        onEdit={EditFormHandler}
                    />
                ))
            }
        </ul>
    )
};

export default UsersList;