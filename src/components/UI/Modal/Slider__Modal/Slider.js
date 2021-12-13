import { useState } from "react";
import "./Slider__Modal.css";

import Modal from "../Modal";

const SlideDrawer = (props) => {
  let cssClasses = ["side__drawer", props.show ? "open" : "closed"];
  return (
    <div className={cssClasses.join(" ")}>
      <h1>Hello, I'm sliding!</h1>
    </div>
  );
};

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <>
      {props.children}
      <SlideDrawer show={props.show} />
    </>
  );
};

const Trial2 = () => {
  const [showModal, setShow] = useState(false);

  const drawerClickHandler = () => {
    setShow(!showModal);
  };

  const backdropClickHandler = () => {
    setShow(false);
  };

  let content = <Backdrop close={backdropClickHandler} />;

  return (
    <>
      <p>Content</p>
      <Modal show={showModal} />
      {showModal && content}
      <button onClick={drawerClickHandler}>Click Me!</button>
    </>
  );
};

const Trial = () => {
  const [showModal, setShow] = useState(false);
  const drawerClickHandler = () => {
    setShow(!showModal);
  };

  const backdropClickHandler = () => {
    setShow(false);
  };

  return (
    <Modal onClose={backdropClickHandler}>
      <h1>Trial and Error</h1>
      <button onClick={drawerClickHandler}>Click Me!</button>
    </Modal>
  );
};

export default Trial;
