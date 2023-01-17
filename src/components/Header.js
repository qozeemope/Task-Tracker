import React from "react";
import Button from "./Button";
// import { PropTypes } from "react";

function Header({ title }) {
  const onClick = (e) => {
    console.log("Hello");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add " onClick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

// Header.PropTypes = {
//   title: PropTypes.string.isRequired,
// };

// // css in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
