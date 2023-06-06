import { Container } from "react-bootstrap";
import ArtistCard from "./ArtistCard";
import Tracklist from "./Tracklist";
import Player from "./Player";

const Content = ({
    data,
    tracks,
    favTracks,
    toggle,
    setIdNumber,
    isPlayerOpen,
    showPlayer,
    closePlayer,
    idNumber,
}) => {
    if (!data) return;

    return (
        <Container>
            <Container className={isPlayerOpen ? "background-blur" : null}>
                <ArtistCard data={data} />
                <Tracklist
                    tracks={tracks}
                    favTracks={favTracks}
                    toggle={toggle}
                    setIdNumber={setIdNumber}
                    showPlayer={showPlayer}
                />
            </Container>

            <Player idNumber={idNumber} closePlayer={closePlayer} isPlayerOpen={isPlayerOpen} />
        </Container>
    );
};

export default Content;
