import { Container, Card } from "react-bootstrap";
import { BsSpotify } from "react-icons/bs";

const ArtistCard = ({ data }) => {
    const formatNumber = (number) => {
        if (number >= 1000000) {
            return (number / 1000000).toFixed(2) + "M";
        } else if (number >= 1000) {
            return (number / 1000).toFixed(2) + "K";
        } else {
            return number.toString();
        }
    };

    return (
        <Container className="artist-container">
            <Card className="artist-card">
                <Card.Img variant="top" src={data.images[0].url} />
                <Card.Body>
                    <Card.Title>
                        {data.name}
                        <div>
                            <a
                                href={data.external_urls.spotify}
                                target="_blank"
                                className="link-song"
                            >
                                <div>
                                    <BsSpotify className="icon-artist" />
                                </div>
                            </a>
                        </div>
                    </Card.Title>
                    <Card.Text>{formatNumber(data.followers.total)} followers</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ArtistCard;
