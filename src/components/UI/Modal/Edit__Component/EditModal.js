import "./EditModal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={"backdrop"} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={"page"}>
      <div className={"box"}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

const EditModal = (props) => {
  return (
    <div className={"page"}>
      <div className={"box"}>
        <a href="#m2-o" className="link-1" id="m2-c">
          Modal 2
        </a>
        <p className="box__info">With Background (Opacity .4)</p>

        <div className="modal-container" id="m2-o">
          <div className="modal">
            <h1 className="modal__title">Modal 2 Title</h1>
            <p className="modal__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              ex dicta maiores libero minus obcaecati iste optio, eius labore
              repellendus.
            </p>
            <button className="modal__btn">Button &rarr;</button>
            <button className="modal__btn">Button &rarr;</button>
            <a href="#m2-c" className="link-2"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
