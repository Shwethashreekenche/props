import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Gender: {props.gender}</p>
      <p>Phone_no: {props.phno}</p>
      
    </div>
  );
};

export default ChildComponent;