import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { BsSpotify, BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Tracklist = ({ tracks, favTracks, toggle, setIdNumber }) => {
    return (
        <Container>
            <Card className="tracklist-wrapper">
                <Card.Body>
                    <Card.Title>Top Songs</Card.Title>
                    <div className="tracklist-container">
                        {tracks.tracks?.map((track) => {
                            return (
                                <Card className="text-center" key={track.id}>
                                    <Card.Img variant="top" src={track.album.images[0].url} />
                                    <Card.Body>
                                        <Card.Title>
                                            {track.name}
                                            <a
                                                href={track.external_urls.spotify}
                                                target="_blank"
                                                className="link-song"
                                            >
                                                <div>
                                                    <BsSpotify className="icon-song" />
                                                </div>
                                            </a>
                                            <Button onClick={() => setIdNumber(track.id)}>
                                                <Link to="/player" className="link">
                                                    Play
                                                </Link>
                                            </Button>
                                        </Card.Title>
                                        <Card.Text>
                                            {track.artists.map((artist) => artist.name).join(", ")}
                                        </Card.Text>
                                    </Card.Body>

                                    <Button variant="primary" onClick={() => toggle(track)}>
                                        <BsHeart /> / <BsHeartFill />
                                    </Button>
                                </Card>
                            );
                        })}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Tracklist;
