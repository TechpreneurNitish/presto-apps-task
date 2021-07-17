import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import CountDown from './Components/CountDown';
import CounterThree from './Components/CounterThree';
import DataFetching from './Components/DataFetching';
import HookCounter from './Components/HookCounter';
import HookCounterArr from './Components/HookCounterArr';
import HookCounterOne from './Components/HookCounterOne';
import HookCounterTwo from './Components/HookCounterTwo';
import HookMouse from './Components/HookMouse';
import HookObj from './Components/HookObj';
import IntervalCounter from './Components/IntervalCounter';
import MouseCon from './Components/MouseCon';

function App() {
  return (
    <div className="App">
      <DataFetching />
      {/* 
      <IntervalCounter />
      <MouseCon />
      <HookMouse />
      <HookCounterOne />
      <CountDown />
      <HookCounterArr />
      <CounterThree />
      <HookObj />
      <HookCounterTwo />
      <HookCounter />
      <ClassCounter /> 
      */}
    </div>
  );
}
export default App;