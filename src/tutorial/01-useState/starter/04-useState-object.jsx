import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Name: " + "Mohit");
  const [age, setAge] = useState("Age: " + 20);
  const [hobby, setHobby] = useState("Hobby: " + "Exploring");

  const displayPerson = () => {
    setName("Name: " + "john");
    setAge("Age: " + 22);
    setHobby("Hobby: " + "Researching");
  };
  const displayPerson2 = () => {
    setName("Name: " + "Rohit");
    setAge("Age: " + 29);
    setHobby("Hobby: " + "Coding");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{hobby}</h4>
      <button className="btn bt" onClick={displayPerson}>
        show john
      </button>
      <button className="btn bt" onClick={displayPerson2}>
        show Rohit
      </button>
    </>
  );
};

export default UseStateObject;
