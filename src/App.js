import React from 'react';
import './App.css';
import ClassClick from './Components/ClassClick';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import FunClick from './Components/FunClick';
import Greet from './Components/Greet';
import Msg from './Components/Msg';
import NameList from './Components/NameList';
import ParentComp from './Components/ParentComp';
import StyleSheet from './Components/StyleSheet';
import UserGreeting from './Components/UserGreeting';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <StyleSheet />
      {/* <NameList />
      <UserGreeting />
      <ParentComp />
      <EventBind />
      <ClassClick />
      <FunClick />
      <Counter />
      <Greet name="Nitish" heroName="Developer">
        <p>This is my paragraph for Nitish Developer</p>
        </Greet>
      <Greet name="Rahul" heroName="Coder">
        <button>Click Me</button>
      <Greet name="Barun" heroName="Programmer" />
      <Welcome name="Nitish" heroName="Developer" />
      <Welcome name="Rahul" heroName="Coder" />
      <Welcome name="Barun" heroName="Programmer" />
      <Msg  /> */}

    </div>
  );
}
export default App;