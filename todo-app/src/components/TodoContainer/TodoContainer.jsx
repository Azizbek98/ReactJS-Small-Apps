import React from "react";

const TodoContainer = ({ task }) => {
  console.log(task);

  return (
    <section>
      <h2 className="text-center">Todo Container</h2>
      <ul>
        {task.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default TodoContainer;
