import React, { useEffect, useRef, useState } from 'react'

const Parent = () => {
  const [count,setCount] = useState(0);
  useEffect(()=>{
    console.log('count updated');    
  },[count])

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={()=>setCount(count+1)}>incriment</button>
    </div>
  )
}

export default Parent