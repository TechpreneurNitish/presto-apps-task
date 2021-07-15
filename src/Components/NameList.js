import React from 'react';
import Person from './Person';

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Nitish',
      age: 24,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Rahul',
      age: 23,
      skill: 'Javascript',
    },
    {
      id: 3,
      name: 'Barun',
      age: 22,
      skill: 'Python',
    },
  ];
  const personList = persons.map((person) => <Person key={person.id} person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
