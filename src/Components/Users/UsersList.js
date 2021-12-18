import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card>
      <div className={styles.users}>
        <ul>
          {props.users.map((item) => {
            return (
              <li key={item.key}>
                {item.userName + " (" + item.age + " years old)"}
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};
export default UsersList;
