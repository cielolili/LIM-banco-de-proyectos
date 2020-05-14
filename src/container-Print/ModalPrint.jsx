import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import like from '../assets/like.svg';


function ModalPrint({
  img, description, profileUser, name, likes, download,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <input
        type="image"
        variant="primary"
        onClick={handleShow}
        src={img}
        className="itemImage"
        alt="photos"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="description">
            {description}
            <Button variant="danger" href={download} className="buttonSave">Save</Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} alt="photos" className="itemImageModal" />
          <img src={profileUser} alt="photos" className="profileUser" />
          <p className="NameUser">
            {name}
          </p>

          <p className="Textlikes">
            <img src={like} alt="total-likes" className="likes" />
            Likes:
            {' '}

            { likes }

          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="closeButton">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
export default ModalPrint;
