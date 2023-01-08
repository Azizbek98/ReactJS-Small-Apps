import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalForm = ({ modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt
        nobis fugiat, assumenda perspiciatis dignissimos repudiandae iusto quos
        corrupti provident.
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
  );
};

export default ModalForm;
