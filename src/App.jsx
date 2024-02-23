import { useState } from 'react';
import "./components/Timer";
import './App.css'

function App() {
  
  const [showComponent, setShowComponent] = useState(false);

  function handleClick() {
    setShowComponent(prevState => !prevState)
  }

  return (
    <>
      <h1>React Timer</h1>
      <button onClick={() => setShowComponent(!showComponent)}> Toggle </button>
      {showComponent && <Timer/>}
    </>
  )
}

export default App
