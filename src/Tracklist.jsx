import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { BsSpotify, BsHeart, BsHeartFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const Tracklist = ({ tracks, toggleFavourite, showPlayer, favBoolObj }) => {
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
                                        </Card.Title>
                                        <Card.Text>
                                            {track.artists.map((artist) => artist.name).join(", ")}
                                        </Card.Text>
                                        <Button onClick={() => showPlayer(track.id)}>Play</Button>
                                    </Card.Body>

                                    <Button
                                        variant="primary"
                                        onClick={() => toggleFavourite(track)}
                                    >
                                        {favBoolObj[`${track.name}`] ? (
                                            <BsHeartFill />
                                        ) : (
                                            <BsHeart />
                                        )}
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
