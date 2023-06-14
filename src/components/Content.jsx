import ArtistCard from "./ArtistCard";
import Tracklist from "./Tracklist";
import Player from "./Player";
import { useGlobalContext } from "../context/context";

const Content = () => {
    const { data } = useGlobalContext();
    if (!data) return;

    return (
        <>
            <ArtistCard />
            <Tracklist />
            <Player />
        </>
    );
};

export default Content;
