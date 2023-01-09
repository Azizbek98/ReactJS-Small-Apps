import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);

  return (
    <main>
      <TodoList task={task} />
      <TodoContainer task={task} />
    </main>
  );
}

export default App;
