import React, {useState} from 'react'

function CounterThree() {
  
const [name, setName] = useState({firstName: '', lastName: ''})

const firstNameHandler = (event) => {
  setName({...name, firstName: event.target.value})
}

const lastNameHandler = (event) => {
  setName({...name, lastName: event.target.value})
}
  return (
    <div>
      <form>
      <label htmlFor="firstName">First Name</label>
      <input type="text" value={name.firstName} onChange={firstNameHandler} />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" value={name.lastName} onChange={lastNameHandler} />
      <h2>Your first name is = {name.firstName}</h2>
      <h2>Your last name is = {name.lastName}</h2>
      </form>
    </div>
  )
}

export default CounterThree
