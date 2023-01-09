import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [task, setTask] = useState(["sss"]);

  const test = () => {
    console.log(task);
    task.push("item");
  };

  return (
    <main>
      <TodoList task={task} />
      <TodoContainer task={task} />
      <ul>
        {task.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={test}>+</button>
    </main>
  );
}

export default App;
