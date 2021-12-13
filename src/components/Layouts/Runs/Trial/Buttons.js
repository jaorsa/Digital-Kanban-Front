import axios from "axios";
import { useState } from "react";

const Buttons = () => {
  const [seconds, setSeconds] = useState(0);
  const [counting, setCounting] = useState(true);
  var timer;
  const startHandler = () => {
    console.log(new Date());
    const data = {
      run_id: 2,
      layout_id: 2,
      started: new Date(),
      finished: new Date(),
      pause_time: 50,
      createdAt: "2021-11-08T08:40:55.879Z",
      updatedAt: "2021-11-08T08:40:55.879Z",
    };
    axios
      .put(`http://localhost:3001/run/2`, data)
      .then((res) => console.log(res));
  };

  if (!counting) {
    timer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }

  if (counting) {
    clearInterval(timer);
    console.log("stoping time...");
  }

  const stopHandler = () => {
    setCounting(!counting);
    console.log("changing...");
  };

  return (
    <>
      <p>loading...</p>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <p>{seconds}</p>
    </>
  );
};

export default Buttons;
