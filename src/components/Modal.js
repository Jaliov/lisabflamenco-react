import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function Example() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        id="anniversary"
        dialogClassName="modal-90w"
      >
        <Modal.Title>2024</Modal.Title>
        <img
          src="images/AnniversaryFlyer_4.jpg"
          alt="Anniversary Flyer"
        ></img>{" "}
        <Modal.Body>
          <i
            class="gg-close-r"
            style={{ color: "white" }}
            onClick={handleClose}
          ></i>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
