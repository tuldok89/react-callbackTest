import React, { useEffect, useState } from "react";

const ChildComponent2 = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(props.counter);
  }, [props.counter]);

  return (
    <React.Fragment>
      <p>ChildComponent2: {counter}</p>
    </React.Fragment>
  );
};

export default ChildComponent2;
