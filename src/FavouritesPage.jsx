import { Container, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSpotify, BsTrash3Fill } from "react-icons/bs";
import Player from "./Player";
import { useGlobalContext } from "./context";

const FavouritesPage = ({
    favTracks,
    deleteFavTrack,
    showPlayer,
    idNumber,
    closePlayer,
    isPlayerOpen,
}) => {
    const { x } = useGlobalContext();

    const calcTime = () => {
        let timeMs = 0;
        favTracks.map((track) => {
            timeMs += track.duration_ms;
            return timeMs;
        });

        const hours = Math.floor(timeMs / 3600000);
        const minutes = Math.floor((timeMs % 3600000) / 60000);
        const seconds = Math.floor(((timeMs % 360000) % 60000) / 1000);
        // const timeFormatted = `${hours}h ${minutes}m ${seconds}s`;

        if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds}s`;
        } else {
            return `${minutes}m ${seconds}s`;
        }
    };

    return (
        <Container>
            <div className="btn-container">
                <Button className="back-btn">
                    <Link to="/" className="link">
                        Back
                    </Link>
                </Button>
            </div>
            {x}
            <Card className="fav-wrapper">
                <Card.Body>
                    <Card.Title>Favourite Songs</Card.Title>
                    {favTracks.length === 0 ? null : favTracks.length === 1 ? (
                        <>
                            <Card.Subtitle>
                                {favTracks.length} song | {calcTime()}
                            </Card.Subtitle>
                        </>
                    ) : (
                        <>
                            <Card.Subtitle>
                                {favTracks.length} songs | {calcTime()}
                            </Card.Subtitle>
                        </>
                    )}

                    {favTracks.length === 0 ? (
                        <Card.Text className="list-text">The list is empty!</Card.Text>
                    ) : null}
                    <div className="fav-container">
                        {favTracks.map((track) => {
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

                                    <Button variant="primary" onClick={() => deleteFavTrack(track)}>
                                        <BsTrash3Fill />
                                    </Button>
                                </Card>
                            );
                        })}
                    </div>
                </Card.Body>
            </Card>

            <Player idNumber={idNumber} closePlayer={closePlayer} isPlayerOpen={isPlayerOpen} />
        </Container>
    );
};

export default FavouritesPage;
