import React, { useState } from 'react'
  import {useDispatch} from "react-redux"
  import { addTodo } from '../features/todo/todoSlice';
  
  export default function AddTodo() {
      const [input, setInput] = useState('');
      const dispatch = useDispatch();
  
      const addTodoHandler = (e)=>{
          e.preventDefault();
          dispatch(addTodo(input))
          setInput("")
      }
  
  
    return (
     <form onSubmit={addTodoHandler}>
      <input type="text"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='Enter todo...' />
  
      <button>
          Add Todo 
      </button>
  
     </form>
    )
  }
  

