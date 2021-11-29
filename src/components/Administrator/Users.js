import React, {useState, useEffect} from 'react';

import UsersList from './UsersList';
// import './Users.css';

const Users = props => {
    const [showEditForm, setShowForm] = useState(false);
    const [userState, setNewUser] = useState(null);

    useEffect(() => {
        console.log('EFFECT RUNNING');

        if(!!userState){
            console.log(userState);
            HideShowEditForm();
        }
    
        return () => {
          console.log('EFFECT CLEANUP');
          
        };
      }, [userState]);

    const HideShowEditForm = () => {
        setShowForm(!showEditForm);
    };

    const EditUserHandler = item => {
        setNewUser(item);
        // console.log('user ' + item.name);
    };

    const SaveChanges = () => {
        setNewUser('');
        HideShowEditForm();
    }

    return(
        <React.Fragment>
            <p>Responsables</p>
            {!showEditForm && <UsersList items={props.items} onEditUser={EditUserHandler} /> }
            {/* {showEditForm && !!userState && <EditUser user={userState} onSave={SaveChanges}/>} */}
        </React.Fragment>
    );
};

export default Users;