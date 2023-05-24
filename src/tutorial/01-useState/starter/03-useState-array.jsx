import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  //Using filter method to remove each Item
  const removeItem = () => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAllItem = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" className="btn" onClick={removeItem}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn bt" onClick={clearAllItem}>
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
