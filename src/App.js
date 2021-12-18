import React, { useState } from "react";
import UsersList from "./Components/Users/UsersList";
import AddUser from "./Components/Users/AddUser";

function App() {
  // const users12 = [
  //   {
  //     key: 1,
  //     userName: "Moataz",
  //     age: 31,
  //   },
  //   { key: 2, userName: "Hassan", age: 23 },
  //   { key: 3, userName: "Ahmed", age: 34 },
  // ];
  const [users, setUsers] = useState([]);

  const addNewUser = (newUser) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        newUser,
      ];
    });
  };

  return (
    <div>
      <AddUser onSubmit={addNewUser} />
      {users.length>0 &&<UsersList users={users} />}
    </div>
  );
}

export default App;
