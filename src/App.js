import React, { useState } from "react"; //1st step(how to import react)1 object{useState} in our import statement.//we haVE a capability to useStates in our function component.
import ".//App.css";

function App() {
  const [count, setCount] = useState(0);
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="body">
      <h1>My counter App</h1>
      <div className="times"></div>
      <p> {count} </p>

      <div >
        <button  onClick={() => setCount(count + 2)}>+ </button>
        <button  onClick={() => setCount(count - 2)}>- </button>
      </div>
      <div className="reset">
          <button   onClick={() => setCount(reset)}> reset </button>
        </div>

    </div>
  );
}

export default App;
