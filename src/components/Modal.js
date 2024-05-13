import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
//import Iframe from "react-iframe";
function Example() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(false);
  // const handleOpen = () => {
  //   const timer = setTimeout(() => {
  //     setShow(true);
  //   }, 8000);
  //   return () => clearTimeout(timer);
  // };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <img src="images/AnniversaryFlyer_4.jpg"></img>{" "}
          <Button onClick={handleClose} variant="outline-danger" size="sm">
            x
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
