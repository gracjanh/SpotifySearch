import { Card, Button } from "react-bootstrap";
import { BsSpotify, BsTrash3Fill, BsFillPlayCircleFill } from "react-icons/bs";
import { useGlobalContext } from "../context/context";
import "../styles/FavSongCardVertical.css";

const FavSongCardVertical = ({ track }) => {
    const { toggleFavourite, showPlayer } = useGlobalContext();
    return (
        <Card className="text-center">
            <Card.Img variant="top" src={track.album.images[0].url} />
            <Card.Body>
                <Card.Title>{track.name}</Card.Title>
                <Card.Text>{track.artists.map((artist) => artist.name).join(", ")}</Card.Text>
            </Card.Body>

            <a href={track.external_urls.spotify} target="_blank">
                <BsSpotify className="spotify-icon" />
            </a>

            <div className="btns-wrapper">
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
