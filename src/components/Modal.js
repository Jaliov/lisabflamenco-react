import React from 'react';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Iframe from 'react-iframe';

function Example() {
  const [show, setShow, setOpen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOpen = () => {
    const timer =  setTimeout(() => {
         setOpen(true);
     }, 3000)
      return () => clearTimeout(timer); 
 }

  return (
    <div>
        <Modal show={show} setShow = {handleShow} setOpen = {handleOpen} onHide={handleClose} >
    
        <Modal.Body  className="special_modal"><Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbyron.barn%2Fposts%2Fpfbid0FZTrkHxoS1D5FqbW66enLZjMw6M53XBHiCRonZgQm1Ek9aAuWBwFBy3QzMhStxxBl&show_text=true&width=500" width="450" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/> <Button variant="light" onClick={handleClose}>
            Close
          </Button></Modal.Body>
       
       
      </Modal>
    </div>
  );
}

export default Example;