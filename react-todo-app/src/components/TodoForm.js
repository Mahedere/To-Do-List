import React, { useState } from 'react';

function TodoForm() {
    const[ input]= useState('');
  return (
    <form className='to-do-form'>
        <input
         type='text' 
        placeholder='Add a todo'
        value={input}
        name='text'
        className='todo-input'>
        </input>
        <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm
