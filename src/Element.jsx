import React from "react";

// Functional Component
const Element = ({ details, onDelete }) => (
  <li>
    <button onClick={() => onDelete(details.id)}>X</button> {details.name}
  </li>
);

export default Element;
