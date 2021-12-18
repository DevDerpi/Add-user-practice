import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
const ErrorModal = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    props.onOkay();
  };

  return (
    <div>
      <div className={styles.modal}>
        <Card>
          <div className={styles.header}>
            <h2>{props.message.title}</h2>
          </div>
          <div className={styles.content}>{props.message.body}</div>
          <form className={styles.actions} onSubmit={clickHandler}>
            <Button >Okay</Button>
          </form>
        </Card>
      </div>
      <div onClick={clickHandler} className={styles.backdrop}></div>
    </div>
  );
};
export default ErrorModal;
