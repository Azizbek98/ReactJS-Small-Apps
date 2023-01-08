import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./TodoList.scss";

const TodoList = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <header className="header">
      <h1 className="main-title">Todo List</h1>
      <button className="btn btn-primary" onClick={toggle}>
        Create todo
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt
          nobis fugiat, assumenda perspiciatis dignissimos repudiandae iusto
          quos corrupti provident.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            OK
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </header>
  );
};

export default TodoList;
