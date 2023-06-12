import { Card, Button } from "react-bootstrap";
import { BsSpotify, BsTrash3Fill, BsFillPlayCircleFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const FavSongCardVertical = ({ track }) => {
    const { toggleFavourite, showPlayer } = useGlobalContext();
    return (
        <Card className="text-center">
            <Card.Img variant="top" src={track.album.images[0].url} />
            <Card.Body>
                <div className="song-card-text">
                    <Card.Title>{track.name}</Card.Title>
                    <Card.Text>{track.artists.map((artist) => artist.name).join(", ")}</Card.Text>
                </div>
            </Card.Body>

            <a href={track.external_urls.spotify} target="_blank">
                <BsSpotify className="icon-song" />
            </a>

            <div className="buttons">
                <Button className="card-btn" onClick={() => showPlayer(track.id)}>
                    <BsFillPlayCircleFill />
                </Button>
                <Button className="card-btn" onClick={() => toggleFavourite(track)}>
                    <BsTrash3Fill />
                </Button>
            </div>
        </Card>
    );
};

export default FavSongCardVertical;
