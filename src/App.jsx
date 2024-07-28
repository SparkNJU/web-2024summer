import { useEffect, useState } from "react"
import NewTodo from "./NewTodoForm";

export default function App() {

  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEM")

    if (!localValue) return [];
    return JSON.parse(localValue)
  });

  useEffect (() => {
    localStorage.setItem("ITEM" , JSON.stringify(todos))
  } , [todos]);

  const addTodos = (title) =>{
    setToDos((prevTodos) => { // 使用 prevTodos 来表示当前的 todos 状态  
      return [...prevTodos, { id: crypto.randomUUID(), title, completed: false }]; // 使用 prevTodos 来添加新项  
    }); 

  }

  const toggleTodo = (id, completed) => {
    setToDos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        } else {
          return todo;
        }
      }
      )}
    )}

  const deleteTodo = (id) => {
    setToDos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      })
    }
  )}

  return (
    <>
    <NewTodo addTodos = {addTodos}/>
      

      <div align="center">
        <h1 className="header">ToDoList</h1>
      </div>

      <ul className="list">

        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={(e) => toggleTodo(todo.id, e.target.checked)}></input>
                {todo.title}
              </label>
              <button className="btn btn-danger" type="button" style={{ color: "red" }} onClick={(e) => deleteTodo(todo.id)}>Delete</button>
            </li>

          )
        })}

      </ul>
    </>
  )
}
