import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  function addTodo(todo){
    setTodos([...todos, todo])
    setTitle('')
    setDesc('')
  }
  return (
    <>
    <div>
      <input type="text" placeholder='enter the taks' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type="text" placeholder='enter the description' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>

      <button onClick={()=>{addTodo({title :title, desc: desc})}}>Add task</button>
    </div>

    <h1>Todos</h1>
    <div className="todoContainer">
      {
        todos.map(function(item){
          return <>
          <div className="title">{item.title}</div>
          <p className="desc">{item.desc}</p>
          </>
        })
      }
    </div>
    </>
  )
}

export default App
