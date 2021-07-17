import React from 'react';
import './App.css';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value='Nitish Singh Chauhan'>
      <ComponentC />
      </UserProvider>
    </div>
  );
}
export default App;