import React from 'react';
import ChildComponent from './ChildComponent';
import ChildComponent1 from './ChildComponent1';
const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name="John" age={30} gender="Male" phno={1234567890}/>
      <ChildComponent1 name="Sweety" age={26} gender="Female" phno={1234543290}/>
    </div>
  );
};

export default ParentComponent;