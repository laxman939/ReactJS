/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import React, { useContext } from "react";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";
import { TodosContext } from "../../todo-context";

export const TodoList = () => {
  const [todos, setTodos] = useContext(TodosContext);

  const handleDelete = (id) => {
    setTodos(todos.filter((ele) => ele.id !== id));
    // Fix an ability to delete task
  };

  const toggleCheck = (id) => {
    const selectedTodo = todos.filter((ele) => ele.id === id);
    const index = todos.findIndex((item) => item.id === id);

    if (index !== -1) {
      const updatedData = [...todos];
      const newData = {
        id,
        label: selectedTodo[0].label,
        checked: !selectedTodo[0].checked,
      };
      updatedData[index] = { ...updatedData[index], ...newData };
      setTodos(updatedData);
    }
    // Fix an ability to toggle task
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length > 0 ? (
        <div className="todo-list-content d-flex flex-column">
          {todos.map((todoItem) => {
            return (
              <Checkbox
                key={todoItem.id}
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => toggleCheck(todoItem.id)}
                onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                onDelete={() => handleDelete(todoItem.id)}
              />
            );
          })}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
