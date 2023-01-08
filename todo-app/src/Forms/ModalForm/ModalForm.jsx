import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalForm = ({ modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Enter task category here" />
          </div>
          <div className="form-group">
            <textarea placeholder="Enter task description here"></textarea>
          </div>
        </form>
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
