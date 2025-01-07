import React, { useState } from 'react'

const Header = () => {
  const [color,newColor] = useState("green")
  const [count , newCount] = useState(0)
  const changeColor = () =>{
    newColor('Red')
  }
  const incCount = () =>{
    newCount(count+1);
  }
  const decCount = () =>{
    newCount(count-1);
  }
  return (
    <div>
        <h6>header color is {color}</h6>
        <button onClick={changeColor}>change color</button>
        <br />
        <h3>Count is {count}</h3>
        <button onClick={incCount} style={{color:'red'}}>+</button>
        <button onClick={decCount} style={{color:'green'}}>-</button>
    </div>
  )
}

export default Header