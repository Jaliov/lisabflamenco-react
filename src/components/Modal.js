import React from 'react';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css"

import Iframe from 'react-iframe';

function Example() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  const handleOpen = () => {
    const timer =  setTimeout(() => {
         setShow(true);
     }, 3000)
      return () => clearTimeout(timer); 
 }

  return (
    <>
        <Modal show={show}  setShow = {handleOpen} onHide={handleClose} >
    
        <Modal.Body  className="special_modal w-auto p-3"><Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbyron.barn%2Fposts%2Fpfbid0FZTrkHxoS1D5FqbW66enLZjMw6M53XBHiCRonZgQm1Ek9aAuWBwFBy3QzMhStxxBl&show_text=true&width=500" width="100%" height="600" display="block" top = "20%"
        position="relative" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/> <Button variant="light" onClick={handleClose}>
            Close
          </Button></Modal.Body>
       
       
      </Modal>
    </>
  );
}

export default Example;