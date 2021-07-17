import React, {useState, useEffect} from 'react'

function IntervalCounter() {

  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(PrevCount => PrevCount + 1)
  }


  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default IntervalCounter
