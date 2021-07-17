import React, { useState } from 'react';

function HookObj(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameHandlerChange = (event) => {
    setName(event.target.value);
  };

  const ageHandlerChange = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert(`My name is ${name} and age is ${age}`)
    console.log(name, age);
    setName("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Full Name </label>
        <input type="text" id="name" onChange={nameHandlerChange} value={name} />
        <label htmlFor="age">Age </label>
        <input type="text" onChange={ageHandlerChange} value={age} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HookObj;
