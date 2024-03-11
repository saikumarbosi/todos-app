
import React, { useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleTask = () => {
    if(inputValue !== ''){
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  
  }
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  };

  const handleUpdateTodo = () => {
    const updateTodos = [...todos]
    // console.log(updateTodos)
    setInputValue(todos)
    const a = setInputValue(todos)
     updateTodos.push(a)
    // console.log(updateTodos)
    updateTodos.shift()
    setTodos(updateTodos)

  }

  return (
    <div className='bg-container'>
        <div className='container'>
            <h1 className='heading'>Day Goals!</h1>
            <div className='input-box'>
              <input type='text' placeholder='Add a todo' value={inputValue} onChange={handleInput} />
              <br />
              <button onClick={handleTask}>Add Todo</button>
            </div>
             
              <ul className='todos-list'>
                {todos.map((todo, index) => (
                  <li key = {index}>{todo} <span> <MdModeEdit onClick={() => handleUpdateTodo()}/> <TiDeleteOutline
                  onClick={() => handleDeleteTodo(index)}
                  style={{ marginLeft: '10px', cursor: 'pointer', color: "red" }}/> </span></li>
                ))}
              </ul>
            
        </div>
    </div>
  )
}

export default App
