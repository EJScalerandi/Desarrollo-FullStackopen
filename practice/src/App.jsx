import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  


  return (
    <div>
    <div>Contador {counter}</div>
    <button onClick={()=> setCounter(counter + 1)}>plus</button>
    <button onClick={()=> setCounter(0)}>Setear</button>
    </div>
  )
}

export default App