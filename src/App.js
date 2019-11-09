import React from "react";
import ReactDOM from "react-dom";
import CollapseContainer from "./Recoco";

const TestRecoco = () => {
  return (
    <CollapseContainer>
      <p>Text inside the content</p>
    </CollapseContainer>
  );
};

const wrapper = document.querySelector("#recoco");
wrapper ? ReactDOM.render(<TestRecoco />, wrapper) : false;
