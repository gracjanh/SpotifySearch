import { Card, Button } from "react-bootstrap";
import { BsSpotify, BsTrash3Fill, BsFillPlayCircleFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const FavSongCardHorizontal = ({ track }) => {
    const { toggleFavourite, showPlayer } = useGlobalContext();

    return (
        <Card className="card-horizontal">
            <div className="card-wrapper">
                <Card.Img src={track.album.images[0].url} className="x" />
                <Card.Body className="card-content">
                    <div className="card-horizontal-text">
                        <Card.Title>{track.name}</Card.Title>

                        {track.artists.map((artist) => artist.name).join(", ")}
                    </div>

                    <div className="card-buttons-container">
                        <a href={track.external_urls.spotify} target="_blank">
                            <BsSpotify className="icon-song" />
                        </a>
                        <div className="card-buttons">
                            <Button className="card-btn" onClick={() => showPlayer(track.id)}>
                                <BsFillPlayCircleFill />
                            </Button>
                            <Button className="card-btn" onClick={() => toggleFavourite(track)}>
                                <BsTrash3Fill />
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
};

export default FavSongCardHorizontal;
