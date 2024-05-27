import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function Example() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} id="modal">
        <Modal.Body>
          <h4>
            Celebrating 25 years of Teaching at<br></br> The Arts Council of
            Princeton!
          </h4>
          <Button onClick={handleClose} variant="outline-danger" size="sm">
            x
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
