import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const newTodo = { title, desc };
    setTodos([...todos, newTodo]);
    setTitle('');
    setDesc('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setTitle(todos[index].title);
    setDesc(todos[index].desc);
  };

  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = { title, desc };
    setTodos(updatedTodos);
    setEditIndex(-1);
    setTitle('');
    setDesc('');
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="form">
        <input type="text" placeholder="Enter task" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Enter description" value={desc} onChange={(e) => setDesc(e.target.value)} />

        {editIndex === -1 ? (
          <button onClick={addTodo}>Add Task</button>
        ) : (
          <button onClick={updateTodo}>Update Task</button>
        )}
        <button onClick={deleteAllTodos} style={{ marginLeft: '10px' }}>Delete All</button>
      </div>

      <div className="todoList">
        {todos.map((todo, index) => (
          <div className="todo" key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>

            <div className="buttons">
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
