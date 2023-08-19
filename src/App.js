import { useState } from "react";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] =useState([])

  const onAddTodo = (el) => {
    setTodos((prev)=>{
      return [el, ...prev]
    })
  }
  

  return (
    <div>
      <h1>React To Do List</h1>
      <NewTodo addTodo={onAddTodo} />
      <Todos setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
