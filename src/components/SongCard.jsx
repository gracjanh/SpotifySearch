import { Card, Button } from "react-bootstrap";
import { BsSpotify, BsHeart, BsHeartFill, BsFillPlayCircleFill } from "react-icons/bs";
import "../styles/SongCard.css";

import { useGlobalContext } from "../context/context";

const SongCard = ({ track }) => {
    const { toggleFavourite, showPlayer, favBoolObj } = useGlobalContext();

    return (
        <Card className="text-center" key={track.id}>
            <Card.Img variant="top" src={track.album.images[0].url} />
            <Card.Body>
                <Card.Title>{track.name}</Card.Title>
                <Card.Text>{track.artists.map((artist) => artist.name).join(", ")}</Card.Text>
            </Card.Body>
            <div>
                <a href={track.external_urls.spotify} target="_blank">
                    <BsSpotify className="spotify-icon" />
                </a>
            </div>

            <div className="btns-wrapper">
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
