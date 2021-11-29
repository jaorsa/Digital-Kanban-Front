import React, { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./UserForm.module.css";
import Input from "..//UI/Input/Input";
import Button from "../UI/Button/Button";

const UserForm = (props) => {
  const [passwordOneState, setNewPasswordOne] = useState("");
  const [usernameState, setNewUsername] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const onSubmitHandler = (event) => {
    props.onSave(usernameState, passwordOneState);
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
      passwordOneState.trim().length > 0 && usernameState.trim().length > 0
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
    <div className={classes.control}>
      <Card className={`${classes.login} `}>
        <form onSubmit={onSubmitHandler}>
          <Input
            label="Email"
            type="email"
            name="name"
            value={usernameState}
            onChange={usernameChangeHandler}
            placeholder="AXXXXX@tec.mx"
          />
          <Input
            label="First Name"
            id="first_name"
            name="first_name"
            type="text"
            value={passwordOneState}
            onChange={passwordOneChangeHandler}
            placeholder="Jorge"
          />
          <div className={classes.button__container}>
            <button
              disabled={!formIsValid}
              type="submit"
              className={classes.login__submit}
            >
              <span className={classes.button__text}>Log In</span>
            </button>
            {/* <Button onClick={props.onCancel}>Cancel</Button>
            <Button disabled={!formIsValid} type="submit">
              Continue
            </Button> */}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
