import React, { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./UserForm.module.css";
import Input from "..//UI/Input/Input";
import Button from '../UI/Button/Button';

const UserForm = (props) => {
  const [passwordOneState, setNewPasswordOne] = useState("");
  const [usernameState, setNewUsername] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const onSubmitHandler = (event) => {
    props.onSave(
      usernameState,
      passwordOneState
    );
    resetForm();
    event.preventDefault();
  };

  const resetForm = () => {
    setNewPasswordOne("");
    setFormIsValid(false);
    setNewUsername("");
  };

  const formHandler = () => {
    setFormIsValid(
        passwordOneState.trim().length > 6 &&
        usernameState.trim().length > 0 
    );
  };

  const passwordOneChangeHandler = (event) => {
    setNewPasswordOne(event.target.value);
    formHandler();
  };

  const usernameChangeHandler = (event) => {
    setNewUsername(event.target.value);
    formHandler();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={onSubmitHandler}>
        <Input
          label="Username"
          type="text"
          name="name"
          value={usernameState}
          onChange={usernameChangeHandler}
          placeholder="Username"
        />
        <Input
          label="Password"
          id="passwordOne"
          name="passwordOne"
          type="password"
          value={passwordOneState}
          onChange={passwordOneChangeHandler}
          placeholder="Password"
        />
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button disabled={!formIsValid} type="submit">
          Continue
        </Button>
      </form>
    </Card>
  );
};

export default UserForm;
