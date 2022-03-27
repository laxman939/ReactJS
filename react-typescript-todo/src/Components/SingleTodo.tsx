
import React, {useState, useEffect, useRef} from 'react'
import { Todo } from '../model';
import "./style.css"


import {AiFillEdit} from "react-icons/ai"
import {MdDelete, MdDone} from "react-icons/md"

type  Props = {
todo: Todo,
todos: Todo[],
setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

function handleDone(id:number){
  setTodos(todos.map((todo) =>
 todo.id === id ? {...todo, isDone: !todo.isDone}: todo
 )
 )}

function handleDelete(id:number){
  setTodos(todos.filter((todo) => todo.id !== id )
 )}

function handleEdit(e: React.FormEvent, id: number){
  e.preventDefault();

  setTodos(todos.map((todo) => (todo.id === id ? {...todo, todo:editTodo} : todo)));
  setIsEdit(false)
} 

useEffect(() => {
  inputRef.current?.focus();
},[isEdit])

  return (
    <form className='todos-single' onSubmit={(e) => handleEdit(e, todo.id)}>

      { isEdit ? (
        <input type="text" ref={inputRef} value={editTodo } onChange={(e) => setEditTodo(e.target.value)} className='todos-single-text'/>
      ): todo.isDone ? (
          <s className='todos-single-text'>{todo.todo}</s>
        ): (
          <span className='todos-single-text'>{todo.todo}</span>
        )
      }
        <div>
            <span className='icon' onClick={() => {
               if(!isEdit && !todo.isDone){
                setIsEdit(!isEdit);
               }
            }}><AiFillEdit/></span>
            <span className='icon' onClick={() => handleDelete(todo.id)}><MdDelete/></span>
            <span className='icon' onClick={() => handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo