// App.jsx
import React, { useEffect, useState } from 'react';
import NewTodo from './NewTodoForm';
import '../styles/input.css';

export default function App() {
  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem('ITEM');

    if (!localValue) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEM', JSON.stringify(todos));
  }, [todos]);

  const addTodos = (title) => {
    setToDos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  };

  const toggleTodo = (id, completed) => {
    setToDos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NewTodo addTodos={addTodos} />

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black text-center my-8">待办事项列表</h1>

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
            >
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  className="form-checkbox h-6 w-6 text-blue-500"
                />
                <span className="text-lg">{todo.title}</span>
              </label>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => deleteTodo(todo.id)}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
