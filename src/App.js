import React from 'react';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import FocusInput from './Components/FocusInput';
import FRPreInput from './Components/FRPreInput';
import Hero from './Components/Hero';
import HoverCounter from './Components/HoverCounter';
import HoverCounterTwo from './Components/HoverCounterTwo';
import Input from './Components/Input';
import PreComp from './Components/PreComp';
import RefsDemo from './Components/RefsDemo';

function App() {
  return (
    <div className="App">
      <ClickCounterTwo />
      <HoverCounterTwo />
      {/* 
      <ClickCounter />
      <HoverCounter />
      <Hero />
      <FRPreInput />
      <FocusInput />
      <Input />
      <RefsDemo />
      <PreComp />
      */}
    </div>
  );
}
export default App;