import React from "react";
import { Link } from "react-router-dom";

const HelloWord = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/">Labs</Link>
      <Link to="/tuiter/home">Tuiter</Link>
    </>
  );
};

export default HelloWord;
