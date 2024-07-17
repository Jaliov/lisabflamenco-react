import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
//mport Button from "react-bootstrap/Button";
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
        aria-labelledby="contained-modal-title-vcenter"
        size="md"
      >
        <Modal.Title
          className="modal-content text-light"
          style={{
            backgroundColor: "black",
            padding: "0",
            borderColor: "black",
          }}
        >
          2024
        </Modal.Title>
        <img src="images/AnniversaryFlyer_4.jpg" alt="Anniversary Flyer"></img>{" "}
        <Modal.Body
          className="modal-content text-light"
          style={{
            backgroundColor: "black",
            borderColor: "black",
            padding: "0",
          }}
        >
          <Modal.Footer
            style={{
              backgroundColor: "black",
              padding: "0",
              borderColor: "black",
            }}
          >
            <i
              class="gg-close-r"
              style={{
                color: "white",
                textAlign: "center",
                padding: "0",
              }}
              onClick={handleClose}
            ></i>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
