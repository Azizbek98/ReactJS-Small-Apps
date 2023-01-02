import TodoList from "./components/TodoList/TodoList";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <main>
      <TodoList />
      <TodoContainer />
    </main>
  );
}

export default App;
