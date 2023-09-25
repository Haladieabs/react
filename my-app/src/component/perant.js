import React from 'react';
import Child from './child';

function Parent() {
    const name = "John";
    return (
      <div>
        <Child name={name} />
      </div>
    );
  }
  
  export default Parent;