import React from 'react'

const ListTask = ({task,index,RemoveTask}) => {
  return (
    <>
    <div className='list-task'>
        {task.title}
        <button onClick={()=>{RemoveTask(index)}} className='delete-btn' >Delete</button>
    </div>
    </>
  )
}

export default ListTask