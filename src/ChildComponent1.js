import React from 'react';

const ChildComponent1 = (props) => {
  return (
    <div>
      <h2>Child Component 1</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Gender: {props.gender}</p>
      <p>Phone_no: {props.phno}</p>
      
    </div>
  );
};

export default ChildComponent1;