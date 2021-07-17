import React, { useState } from 'react'

function HookCounterArr() {
  const [items, setItems] = useState([])

  const addClickHandler = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }

  return (
    <div>    
      <button onClick={addClickHandler}>Add a Number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterArr
