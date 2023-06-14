import { Card, Button } from "react-bootstrap";
import { BsSpotify, BsTrash3Fill, BsFillPlayCircleFill } from "react-icons/bs";
import { useGlobalContext } from "../context/context";
import "../styles/FavSongCardHorizontal.css";

const FavSongCardHorizontal = ({ track }) => {
    const { toggleFavourite, showPlayer } = useGlobalContext();

    return (
        <Card className="card-wrapper">
            <div className="card-wrapper-2">
                <Card.Img src={track.album.images[0].url} className="card-img" />
                <Card.Body className="card-content">
                    <div className="card-horizontal-text">
                        <Card.Title>{track.name}</Card.Title>

                        {track.artists.map((artist) => artist.name).join(", ")}
                    </div>

                    <div className="card-btns-wrapper">
                        <a href={track.external_urls.spotify} target="_blank">
                            <BsSpotify className="spotify-icon" />
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
