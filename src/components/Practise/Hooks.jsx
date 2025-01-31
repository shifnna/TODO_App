//^ useRef
// import React, { useRef } from 'react'

// function Hooks() {
//   const inputRef = useRef(null);
//   const handleClick = ()=>{
//     alert(`${inputRef.current.value}`)
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>click</button>
//     </div>
//   )
// }

// export default Hooks



// import React, { useRef } from 'react'

// function Hooks() {
//   const usingRef = useRef(null)
//   const handleFocus = ()=>{
//     console.log('focusing'); 
//     usingRef.current.focus();
//   }
//   return (
//     <>
//      <input type="text" ref={usingRef} />
//      <button onClick={handleFocus}>Focus input</button>
//     </>
//   )
// }

// export default Hooks



// import React, { useRef } from "react";

// const Hooks = () => {
//   const countRef = useRef(0); // Initialize ref with 0

//   const handleClick = () => {
//     countRef.current += 1; // Change the ref value
//     console.log("Ref value:", countRef.current); // Logs new value but UI won't update
//   };

//   return (
//     <div>
//       <p>Ref value: {countRef.current}</p> {/* Won't update UI */}
//       <button onClick={handleClick}>Increment Ref</button>
//     </div>
//   );
// };

// export default Hooks;

//^ useState
// import React, { useEffect, useRef, useState } from 'react'

// const Hooks = () => {
//   const [count,setCount] = useState(0);
//   useEffect(()=>{
//     console.log('count updated');    
//   },[count])

//   return (
//     <div>
//       <h4>{count}</h4>
//       <button onClick={()=>setCount(count+1)}>incriment</button>
//     </div>
//   )
// }

// export default Hooks

//^ useEffect
// import React, { useState, useEffect } from "react";

// function Hooks() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Count updated: ${count}`);
//   }, [count]); 

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <p>Current Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Hooks;



// import React,{ useEffect } from "react";

// const Hooks = () => {
//   useEffect(() => {
//     console.log("Component Mounted");

//     return () => {
//       console.log("Component Unmounted"); // Runs when unmounting
//     };
//   }, []); // Empty dependency array = Runs once on mount & unmount

//   return <h1>Hello, React!</h1>;
// };

// export default Hooks;


//^ HOC
// const x = (msg)=>{
//     console.log(msg);   
// }

// const HOC = (x)=>{
//     return (props)=>{
//         console.log('HOC');
//         return <x {...props}/>
//     }
// }

// const newHoc = HOC(x);

// const app = ()=>{
//     return <newHoc msg='hello x'/>
// }
