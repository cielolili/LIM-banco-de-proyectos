import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
        data-testid="input"
        type="image"
        variant="primary"
        onClick={handleShow}
        src={img}
        className="itemImage"
        alt="photos"
      />
      <div data-testid="modal">

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="description">
              {description}
            </Modal.Title>
            {/* <a className="buttonSave">Save</a> */}
            <a className="btn btn-danger buttonSave" href={download}>
              Save
            </a>

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
      </div>
    </section>
  );
}
ModalPrint.propTypes = {
  img: PropTypes.func.isRequired,
  description: PropTypes.func.isRequired,
  profileUser: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
  likes: PropTypes.func.isRequired,
  download: PropTypes.func.isRequired,
};
export default ModalPrint;
