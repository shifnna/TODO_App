import { useState } from 'react'
import './Counter.css'

function Counter() {

  const [count, setCount] = useState(0)
  const [error, setError] = useState('');


  let increment = () => {
    setCount(count + 1)
    setError('');
  }

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1)
      setError(''); 
    }else {
        setError('Count cannot go below zero!'); 
    }
  }

  const reset = () => {
    setCount(0)
    setError('');
  }
  return (
    <div className="container">
      <h1 className="counter">{count}</h1>
      {error && <p className="error-message">{error}</p>}
      <div>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  )
}

export default Counter