import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseCon() {
  const [display, setDisplay] = useState(true)

  const toggleDisplayHandler = () => {
    setDisplay(!display)
  }

  return (
    <div>
      <button onClick={toggleDisplayHandler}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseCon
