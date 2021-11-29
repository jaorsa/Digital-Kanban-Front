import React, { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./NewUser.module.css";
import Input from "..//UI/Input/Input";
import Button from '../UI/Button/Button';

const NewUser = (props) => {
  const [passwordOneState, setNewPasswordOne] = useState("");
  const [passwordTwoState, setNewPasswordTwo] = useState("");
  const [emailState, setNewEmail] = useState("");
  const [first_nameState, setNewFirstName] = useState("");
  const [last_nameState, setNewLastName] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const onSubmitHandler = (event) => {
    props.onSave(
      emailState,
      first_nameState,
      last_nameState,
      passwordOneState
    );
    resetForm();
    event.preventDefault();
  };

  const resetForm = () => {
    setNewPasswordOne("");
    setNewPasswordTwo("");
    setNewFirstName("");
    setNewLastName("");
    setFormIsValid(false);
    setNewEmail("");
  };

  const formHandler = () => {
    setFormIsValid(
        passwordOneState.trim().length > 6 &&
        passwordOneState === passwordTwoState &&
        emailState.trim().length > 0 &&
        first_nameState.trim().length > 0 &&
        last_nameState.trim().length > 0 
    );
  };

  const passwordOneChangeHandler = (event) => {
    setNewPasswordOne(event.target.value);
    formHandler();
  };

  const passwordTwoChangeHandler = (event) => {
    setNewPasswordTwo(event.target.value);
    formHandler();
  };

  const emailChangeHandler = (event) => {
    setNewEmail(event.target.value);
    formHandler();
  };

  const first_nameChangeHandler = (event) => {
    setNewFirstName(event.target.value);
    formHandler();
  };

  const last_nameChangeHandler = (event) => {
    setNewLastName(event.target.value);
    formHandler();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={onSubmitHandler}>
        <Input
          label="Email"
          type="email"
          name="name"
          value={emailState}
          onChange={emailChangeHandler}
          placeholder="AXXXXXXX@tec.mx"
        />
        <Input
          label="First Name"
          type="text"
          name="name"
          value={first_nameState}
          onChange={first_nameChangeHandler}
          placeholder="First Name"
        />
        <Input
          label="Last Name"
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={last_nameState}
          onChange={last_nameChangeHandler}
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
        <Input
          label="Confirm Password"
          id="passwordTwo"
          name="passwordTwo"
          type="password"
          value={passwordTwoState}
          onChange={passwordTwoChangeHandler}
          placeholder="Confirm Password"
        />
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button disabled={!formIsValid} type="submit">
          Continue
        </Button>
      </form>
    </Card>
  );
};

export default NewUser;
