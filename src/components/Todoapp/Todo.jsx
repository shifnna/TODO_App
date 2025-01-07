import React, { useEffect, useState } from 'react'
import './Todo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'

const Todo = () => {
  const [tasks, SetTasks] = useState([]);
  useEffect(()=>{
    document.title=`you have ${tasks.length} task(s)`})

  const handleAddTask = (title) => { // Rename the function to avoid conflict
    let NewTask = [...tasks, { title }];
    SetTasks(NewTask);
  };

  const RemoveTask = (index)=>{
     const NewTask = [...tasks]
     NewTask.splice(index,1)
     SetTasks(NewTask)
  }

  return (
    <>
      <div className='todo-container'>
        <div className='header'>TODO APP</div>

        <div className='add-task'>
          <AddTask AddTask={handleAddTask} /> {/* Pass renamed function */}
        </div>

        <div className='tasks'>
          {tasks.map((task, index) => (
            <ListTask key={index} index={index} task={task} RemoveTask={RemoveTask} /> // Add key prop here
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
