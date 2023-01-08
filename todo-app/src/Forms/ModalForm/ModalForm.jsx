import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

const ModalForm = ({ modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
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
            />
          </FormGroup>
          <FormGroup>
            <Label for="task-description">Text Area</Label>
            <Input
              id="task-description"
              name="text"
              type="textarea"
              placeholder="Enter task description here"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={toggle}>
          Create
        </Button>{" "}
        <Button color="danger" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalForm;
