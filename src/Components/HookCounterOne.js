import React, {useState, useEffect} from 'react'

function HookCounterOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('useEffect - Updating document title');
    document.title = `You have clicked ${count} times`
  }, [count])

  const incrementCountHandler = () => {
    setCount(count + 1)
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <h2>Count Number: {count} </h2>
      <input type="text" onChange={nameChangeHandler} value={name} />
      <button onClick={incrementCountHandler}>Click Me to Count</button>
    </div>
  )
}

export default HookCounterOne
