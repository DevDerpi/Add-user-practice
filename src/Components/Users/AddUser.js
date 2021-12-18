import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  // const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const submitChangeHandler = (event) => {
    event.preventDefault();
    if (userName && age>0) {
      const user = {
        userName: userName,
        age: +age,
        key: Math.random(),
      };
      console.log(user);
      props.onSubmit(user);
      setUserName("");
      setAge("");
    } else {
      if (!userName || !age) {
        setIsError(true);
        setErrorMessage({title: "Invalid Input ",body : "Please Enter a Valid name and age (non-empty values)."});
      } else if (age < 1) {
        setIsError(true);
        setErrorMessage({title: "Invalid Age",body:"Please Enter a Valid Age (greater than 1 year)."});
      }
    }
  };
  const dissmissErrorHandler = () => {
    setIsError(false);
  };

  return (
    <Card>
      {isError && (
        <ErrorModal message={errorMessage} onOkay={dissmissErrorHandler} />
      )}
      <form className={styles.input} onSubmit={submitChangeHandler}>
        <label>Username</label>
        <input onChange={usernameChangeHandler} value={userName} type="text" />
        <label>Age (Years)</label>
        <input onChange={ageChangeHandler} value={age} type="number" />
        <Button>Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
