import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSpotify, BsTrash3Fill } from "react-icons/bs";

const FavouritesPage = ({ favTracks, deleteFavTrack }) => {
    return (
        <Container>
            <div className="btn-container">
                <Button className="back-btn">
                    <Link to="/" className="link">
                        Back
                    </Link>
                </Button>
            </div>

            <Card className="fav-wrapper">
                <Card.Body>
                    <Card.Title>Favourite Songs</Card.Title>
                    <div className="fav-container">
                        {favTracks.map((track) => {
                            return (
                                <Card className="text-center">
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
                                        </Card.Title>
                                        <Card.Text>
                                            {track.artists.map((artist) => artist.name).join(", ")}
                                        </Card.Text>
                                    </Card.Body>
                                    <Button variant="primary" onClick={() => deleteFavTrack(track)}>
                                        <BsTrash3Fill />
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

export default FavouritesPage;
