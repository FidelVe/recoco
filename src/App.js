import React from "react";
import ReactDOM from 'react-dom';
import CollapseContainer from './Recoco';

const TestRecoco = () => {
  return (
    <CollapseContainer />
  )
}

const wrapper = document.querySelector('#recoco');
wrapper ? ReactDOM.render(<TestRecoco />, wrapper) : false;
