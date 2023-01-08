import React, { useState } from "react";
import ModalForm from "../../Forms/ModalForm/ModalForm";

import "./TodoList.scss";

const TodoList = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <header className="header">
      <h1 className="main-title">Todo List</h1>
      <button className="btn btn-primary" onClick={toggle}>
        Create task
      </button>
      <ModalForm modal={modal} toggle={toggle} />
    </header>
  );
};

export default TodoList;
