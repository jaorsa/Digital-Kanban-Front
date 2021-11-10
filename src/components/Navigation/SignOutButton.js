import React from 'react';
import { useContext } from "react";
import UserContext from '../Session/user-context';
import Button from '../UI/Button/Button';
 
const SignOutButton = () => {
    const userCtx = useContext(UserContext);

    const logoutHandler = () => {
        userCtx.removeUser();
    };

    return(<button type="button" onClick={logoutHandler}>
        Sign Out
    </button>)
};

export default SignOutButton;