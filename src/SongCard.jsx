import { Card, Button } from "react-bootstrap";
import { BsSpotify, BsHeart, BsHeartFill, BsFillPlayCircleFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const SongCard = ({ track }) => {
    const { toggleFavourite, showPlayer, favBoolObj } = useGlobalContext();

    return (
        <Card className="text-center" key={track.id}>
            <Card.Img variant="top" src={track.album.images[0].url} />
            <Card.Body>
                <div className="song-card-text">
                    <Card.Title>{track.name}</Card.Title>
                    <Card.Text>{track.artists.map((artist) => artist.name).join(", ")}</Card.Text>
                </div>
            </Card.Body>
            <div>
                <a href={track.external_urls.spotify} target="_blank">
                    <BsSpotify className="icon-song" />
                </a>
            </div>

            <div className="buttons">
                <Button className="card-btn" onClick={() => showPlayer(track.id)}>
                    <BsFillPlayCircleFill />
                </Button>
                <Button className="card-btn" onClick={() => toggleFavourite(track)}>
                    {favBoolObj[`${track.name}`] ? <BsHeartFill /> : <BsHeart />}
                </Button>
            </div>
        </Card>
    );
};

export default SongCard;
