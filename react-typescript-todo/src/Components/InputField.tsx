import React, { useRef } from 'react'
import "./style.css"

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    hadleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo,hadleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) =>{
        hadleAdd(e)
        inputRef.current?.blur()
    }}>
        <input ref={inputRef}
        type="text" className='input-box' 
        placeholder='Enter Todo' value={todo} 
        onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit' className='input-submit'>Add</button>
    </form>
  )
}

export default InputField