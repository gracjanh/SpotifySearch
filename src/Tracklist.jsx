import { Card } from "react-bootstrap";
import { useGlobalContext } from "./context";
import SongCard from "./SongCard";

const Tracklist = () => {
    const { tracks } = useGlobalContext();

    return (
        <>
            <Card className="tracklist-wrapper">
                <Card.Body>
                    <Card.Title>Top Songs</Card.Title>
                    <div className="tracklist-container">
                        {tracks.tracks?.map((track) => {
                            return <SongCard track={track} key={track.id} />;
                        })}
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default Tracklist;
