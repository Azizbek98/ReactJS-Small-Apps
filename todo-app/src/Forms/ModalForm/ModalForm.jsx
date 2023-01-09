import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

const ModalForm = ({ modal, toggle, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTask = () => {
    task.push({ title, description });
  };

  return (
    <Modal isOpen={modal} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="task-title">Email</Label>
            <Input
              id="task-title"
              name="title"
              placeholder="Enter task title here"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="task-description">Text Area</Label>
            <Input
              id="task-description"
              name="text"
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description here"
              required
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={createTask}>
          Create
        </Button>
        <Button color="danger" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalForm;
