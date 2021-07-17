import React, {useState} from 'react'

function CountDown() {

  const [count, setCount] = useState(0)

  setInterval(() => {
    setCount(count + 1)
  }, 1000);

  return (
    <div>
      <h2>Count {count}</h2>
    </div>
  )
}

export default CountDown
