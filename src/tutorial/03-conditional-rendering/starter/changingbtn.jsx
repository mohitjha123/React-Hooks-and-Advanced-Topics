import { useState } from "react";
import React from "react";

const changingbtn = () => {
  const [name, setName] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setName(!name)}>
        {name ? "Rohit" : "Mohit"}
      </button>
    </div>
  );
};

export default changingbtn;
