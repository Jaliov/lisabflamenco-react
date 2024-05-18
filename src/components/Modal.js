import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
//import Iframe from "react-iframe";
function Example() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <img src="images/AnniversaryFlyer_4.jpg" id="anniversary"></img>{" "}
        <Modal.Body>
          {/* <Button onClick={handleClose} variant="outline-danger" size="sm">
            <i class="gg-close"></i>
          </Button> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
