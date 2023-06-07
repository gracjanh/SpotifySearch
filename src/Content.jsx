import { Container, Alert } from "react-bootstrap";
import ArtistCard from "./ArtistCard";
import Tracklist from "./Tracklist";
import Player from "./Player";
import { useGlobalContext } from "./context";

const Content = ({
    data,
    tracks,
    favTracks,
    toggleFavourite,
    setIdNumber,
    isPlayerOpen,
    showPlayer,
    closePlayer,
    idNumber,
    favBoolObj,
}) => {
    if (!data) return;

    return (
        <Container>
            <ArtistCard data={data} />
            <Tracklist
                tracks={tracks}
                favTracks={favTracks}
                toggleFavourite={toggleFavourite}
                setIdNumber={setIdNumber}
                showPlayer={showPlayer}
                favBoolObj={favBoolObj}
            />
            <Player idNumber={idNumber} closePlayer={closePlayer} isPlayerOpen={isPlayerOpen} />
        </Container>
    );
};

export default Content;
