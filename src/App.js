import React from 'react';
import './App.css';
import FocusInput from './Components/FocusInput';
import FRPreInput from './Components/FRPreInput';
import Hero from './Components/Hero';
import Input from './Components/Input';
import PreComp from './Components/PreComp';
import RefsDemo from './Components/RefsDemo';

function App() {
  return (
    <div className="App">
      <Hero />
      {/* 
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