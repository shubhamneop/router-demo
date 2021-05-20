import React from "react";
import { withRouter } from "react-router-dom";

function NotFound(props) {
  const onHome = () => {
    props.history.replace("/");
  };
  return (
    <>
      <h1>Page Not Found</h1>
      <h3>Used withRouter Hoc</h3>
      <button onClick={onHome}>Home page</button>
    </>
  );
}

export default withRouter(NotFound);
