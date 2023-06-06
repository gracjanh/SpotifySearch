import React from "react";
import { Button, Container, Modal } from "react-bootstrap";

const Player = ({ idNumber, closePlayer, isPlayerOpen }) => {
    return (
        <Modal
            onHide={closePlayer}
            show={isPlayerOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <iframe
                    src={`https://open.spotify.com/embed/track/${idNumber}?utm_source=generator&theme=0`}
                    width="100%"
                    height="352"
                    loading="lazy"
                    allow="encrypted-media"
                />
                <Modal.Footer className="close-player">
                    <Button onClick={closePlayer}>Close</Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
    );
};

export default Player;
