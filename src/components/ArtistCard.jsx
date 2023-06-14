import { Container, Card } from "react-bootstrap";
import { BsSpotify } from "react-icons/bs";
import { useGlobalContext } from "../context/context";
import "../styles/ArtistCard.css";

const ArtistCard = () => {
    const { data } = useGlobalContext();

    const formatNumber = (number) => {
        if (number >= 1000000) return (number / 1000000).toFixed(2) + "M";
        else if (number >= 1000) return (number / 1000).toFixed(2) + "K";
        else return number;
    };
    return (
        <Container className="artist-wrapper">
            <Card className="artist-card">
                <Card.Img variant="top" src={data.images[0]?.url} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{formatNumber(data.followers?.total)} followers</Card.Text>
                </Card.Body>
                <div>
                    <a href={data.external_urls?.spotify} target="_blank">
                        <BsSpotify className="artist-icon" />
                    </a>
                </div>
            </Card>
        </Container>
    );
};

export default ArtistCard;
