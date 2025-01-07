import React from 'react'

const Home = ({details}) => {
  return (
    <div>
        {details.map((det)=>(
          <div>
            <h3>name:{det.name}</h3>
            <h3>email:{det.email}</h3>
          </div>
        ))}
    </div>
  )
}

export default Home
