import React ,{useState}from 'react'
import TodoForm from './TodoForm'
function TodoList() {
    const [todos, setTodos]=useState([]);
    const addTodo = todo=>{

    }
  return (
    <div>
      <h1>What's the plzn for today?</h1>
      <TodoForm></TodoForm>
    </div>
  );
}

export default TodoList
