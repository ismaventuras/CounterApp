import {Button, Offcanvas} from 'react-bootstrap'
import { useState } from 'react';

import Account from './Account';
import Wallet from './Wallet';

const OffCanvasInfo = () => {
    

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-success" onClick={handleShow}>
          <Account/>
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>DApp Info</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Wallet/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default OffCanvasInfo