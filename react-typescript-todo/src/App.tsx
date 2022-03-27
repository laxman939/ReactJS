import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import TodoList from './Components/todoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

const hadleAdd = (e: React.FormEvent ) => {
e.preventDefault()

if(todo){
  setTodos([...todos, {id: Date.now(), todo, isDone: false}])
  // todo: todo --> todo
  setTodo("")
}


}
  

  return (
    <div className="App">
      <span className='heading'>to-do</span>
      <InputField todo={todo} setTodo={setTodo} hadleAdd={hadleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
