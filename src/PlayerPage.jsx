import { Link } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const PlayerPage = ({ idNumber }) => {
    return (
        <Container>
            <Button>
                <Link to="/" className="link">
                    Back
                </Link>
            </Button>
            <iframe
                style={{ borderRadius: "12px" }}
                src={`https://open.spotify.com/embed/track/${idNumber}?utm_source=generator&theme=0`}
                width="50%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </Container>
    );
};

export default PlayerPage;
