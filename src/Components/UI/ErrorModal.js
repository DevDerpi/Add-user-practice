import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    props.onOkay();
  };

  return <div onClick={clickHandler} className={styles.backdrop}></div>;
};
const Modal = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    props.onOkay();
  };
  return (
    <div className={styles.modal}>
      <Card>
        <div className={styles.header}>
          <h2>{props.message.title}</h2>
        </div>
        <div className={styles.content}>{props.message.body}</div>
        <form className={styles.actions} onSubmit={clickHandler}>
          <Button>Okay</Button>
        </form>
      </Card>
    </div>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onOkay={props.onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal message={props.message} onOkay={props.onOkay} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
