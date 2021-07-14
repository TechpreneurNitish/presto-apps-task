import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import Msg from './Components/Msg';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Nitish" heroName="Developer">
        <p>This is my paragraph for Nitish Developer</p>
        </Greet>
      <Greet name="Rahul" heroName="Coder">
        <button>Click Me</button>
        </Greet>
      <Greet name="Barun" heroName="Programmer" />
      <Welcome name="Nitish" heroName="Developer" />
      <Welcome name="Rahul" heroName="Coder" />
      <Welcome name="Barun" heroName="Programmer" /> */}
      <Msg  />

    </div>
  );
}
export default App;