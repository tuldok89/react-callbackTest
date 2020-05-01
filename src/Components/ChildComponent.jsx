import React, { useState, useEffect } from "react";

const ChildComponent = (props) => {
  const [counter, setCounter] = useState(0);

  const button_clicked = (e) => {
    setCounter(counter + 1);
    console.log("Counter from child: ", counter);
    props.onButtonClick(counter);
  };

  return <button onClick={button_clicked}>{counter}</button>;
};

export default ChildComponent;
