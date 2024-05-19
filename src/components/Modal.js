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
      <Modal show={show} onHide={handleClose} centered id="anniversary">
        <img src="images/AnniversaryFlyer_4.jpg" id="anniversary"></img>{" "}
        <Modal.Body>
          <i
            class="gg-close-r"
            variant="danger"
            style={{ color: "red" }}
            onClick={handleClose}
          ></i>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
