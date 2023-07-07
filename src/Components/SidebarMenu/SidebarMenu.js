import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SidebarMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Filter Options
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Options</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <ul>
            <li>Liked Subs</li>
            <li>Trending Subs</li>
            <li>18+ or not</li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SidebarMenu;