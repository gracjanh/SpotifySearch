import { Card } from "react-bootstrap";

const FavHeader = ({ favTracks }) => {
    const calcTime = () => {
        let timeMs = 0;
        favTracks.map((track) => {
            timeMs += track.duration_ms;
            return timeMs;
        });

        const hours = Math.floor(timeMs / 3600000);
        const minutes = Math.floor((timeMs % 3600000) / 60000);
        const seconds = Math.floor(((timeMs % 360000) % 60000) / 1000);

        if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds}s`;
        } else {
            return `${minutes}m ${seconds}s`;
        }
    };
    return (
        <>
            <Card.Title>Favourite Songs</Card.Title>
            {favTracks.length === 0 ? null : favTracks.length === 1 ? (
                <>
                    <Card.Subtitle className="mt-2 text-muted">
                        {favTracks.length} song | {calcTime()}
                    </Card.Subtitle>
                </>
            ) : (
                <>
                    <Card.Subtitle className="mt-2 text-muted">
                        {favTracks.length} songs | {calcTime()}
                    </Card.Subtitle>
                </>
            )}
        </>
    );
};

export default FavHeader;
