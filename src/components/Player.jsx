import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useGlobalContext } from "../context/context";
import "../styles/Player.css";

const Player = () => {
    const { isPlayerOpen, closePlayer, idNumber } = useGlobalContext();
    return (
        <Modal
            onHide={closePlayer}
            show={isPlayerOpen}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable={true}
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
