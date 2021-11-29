import React, { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./AccountPage.module.css";
import Input from "..//UI/Input/Input";
import Button from "../UI/Button/Button";

const UpdateUser = (props) => {
  const [telegramState, setNewTelegram] = useState(props.user.telegram_id);
  const [majorState, setNewMajor] = useState(props.user.major);
  // const [classState, setNewMaj] = useState(props.user.class);
  const [emailState, setNewEmail] = useState(props.user.email);
  const [first_nameState, setNewFirstName] = useState(props.user.first_name);
  const [last_nameState, setNewLastName] = useState(props.user.last_name);
  const [formIsValid, setFormIsValid] = useState(false);

  const onSubmitHandler = (event) => {
    props.onSave(
      emailState,
      first_nameState,
      last_nameState,
      majorState,
      telegramState
    );
    resetForm();
    event.preventDefault();
  };

  const resetForm = () => {
    setNewMajor("");
    setNewTelegram("");
    setNewFirstName("");
    setNewLastName("");
    setFormIsValid(false);
    setNewEmail("");
  };

  const formHandler = () => {
    setFormIsValid(
      emailState.trim().length > 0 &&
        first_nameState.trim().length > 0 &&
        last_nameState.trim().length > 0
    );
  };

  const majorChangeHandler = (event) => {
    if (event.target.value !== "" || event.target.value !== null) {
      setNewMajor(event.target.value);
    }
    formHandler();
  };

  const telegramChangeHandler = (event) => {
    if (event.target.value !== "" || event.target.value !== null) {
      setNewTelegram(event.target.value);
    }
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
          label="Major / Carrera"
          id="major"
          name="major"
          type="text"
          value={majorState}
          onChange={majorChangeHandler}
          placeholder="IIS"
        />
        <Input
          label="Telegram"
          id="Telegram"
          name="Telegram"
          type="text"
          value={telegramState}
          onChange={telegramChangeHandler}
          placeholder="XXXXXXXXXXXXXXXXXXX"
        />
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button disabled={!formIsValid} type="submit">
          Continue
        </Button>
      </form>
    </Card>
  );
};

export default UpdateUser;
