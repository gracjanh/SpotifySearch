import { Container } from "react-bootstrap";
import ArtistCard from "./ArtistCard";
import Tracklist from "./Tracklist";

const Content = ({ data, tracks, favTracks, addToFavourites, toggle, setIdNumber }) => {
    if (!data) return;

    return (
        <Container>
            <ArtistCard data={data} />
            <Tracklist
                tracks={tracks}
                favTracks={favTracks}
                toggle={toggle}
                setIdNumber={setIdNumber}
            />
        </Container>
    );
};

export default Content;
