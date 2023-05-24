import { useState } from "react";

//using Hooks
const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClicks = () => {
    setName("name");
  };
  return (
    <div>
      <h4>
        {" "}
        <b> You clicked {count} times</b>
      </h4>
      <h4>
        <b> You clicked {name} button</b>
      </h4>
      <button type="button" onClick={handleClick} className="btn">
        Click me
      </button>
      <button type="button" onClick={handleClicks} className="btn">
        name
      </button>
    </div>
  );
};

export default UseStateBasics;
