import React from "react";
import { useParams, useHistory } from "react-router-dom";

function User() {
  let { user } = useParams();
  let history = useHistory();
  console.log(history);
  return (
    <div>
      <h3>User Component {user}</h3>
      <p>use of useHistory & useParams</p>
      <button onClick={() => history.push("/users")}>Users Component</button>
    </div>
  );
}

export default User;
