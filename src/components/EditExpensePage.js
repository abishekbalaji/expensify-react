import React from "react";

const EditExpensePage = (props) => (
  <div>
    <p>Hello from edit page {props.match.params.id}</p>
  </div>
);

export default EditExpensePage;
