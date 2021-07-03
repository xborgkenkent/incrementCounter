import { useState } from "react";

function App() {

  const [increment, setincrement] = useState(0);

  return (
    <div className="App">
      <h1>I am kent</h1>
      <p>{increment}</p>
      <button onClick= {() =>{
          setincrement(increment +1);
      }}>Increase Counter</button>

    </div>
  );
}

export default App;
