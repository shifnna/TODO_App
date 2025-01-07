import React, { useState } from 'react'

const AddTask = ({ AddTask }) => { // Properly destructure props
    const [value, SetValue] = useState('');
  
    const addItem = () => {
      if (value.trim()) {
        AddTask(value);
        SetValue('');
      }
    };
  
    return (
      <div className='input-container'>
        <input
          type='text'
          placeholder='Add a new Task'
          className='input'
          value={value} // Bind value to input
          onChange={(e) => SetValue(e.target.value)}
        />
        <button onClick={addItem} className='add-btn'>
          ADD
        </button>
      </div>
    );
  };
  
  export default AddTask;
  