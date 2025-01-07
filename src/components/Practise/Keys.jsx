import React, { useState } from 'react'

const Keys = () => {
    const products =[
            {id:1,name:'shif',email:'shif@gmail.com',age:1},
            {id:2,name:'naju',email:'naju@gmail.com',age:1},
            {id:3,name:'dilu',email:'dilu@gmail.com',age:1},
            {id:4,name:'vinu',email:'vinu@gmail.com',age:1},
    ]
    const [items,setItem] = useState(products)
    const changeAge = (id)=>{
        const na = items.map((item)=>(
            item.id === id?{...item,age:item.age+1}:item
        ))
        setItem(na)
    }
  return (
    <div>
        {items.map((product)=>(
            <div key={product.id}>
            <h4>{product.name}</h4>
            <h5>{product.email}</h5>
            <h5>{product.age}</h5>
            <button onClick={()=>changeAge(product.id)}>age+</button>
            </div>
        ))}
    </div>
  )
}

export default Keys