import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Player from "./Player";
import FavHeader from "./FavHeader";
import { useGlobalContext } from "./context";
import { BsGrid, BsListUl, BsSortAlphaDownAlt, BsSortAlphaDown, BsArrowLeft } from "react-icons/bs";
import FavSongCardVertical from "./FavSongCardVertical";
import FavSongCardHorizontal from "./FavSongCardHorizontal";

const FavouritesPage = () => {
    const {
        favTracks,
        isPlayerOpen,
        closePlayer,
        idNumber,
        isGrid,
        changeView,
        sortFavTracks,
        sortOrder,
    } = useGlobalContext();

    return (
        <>
            <div className="top-container">
                <Button className="back-btn">
                    <Link to="/" className="link">
                        <BsArrowLeft className="arrow-icon" />
                    </Link>
                </Button>

                <div className="fav-page-icons">
                    <div className="layout-icon" onClick={changeView}>
                        {isGrid ? <BsListUl /> : <BsGrid />}
                    </div>
                    <div className="sort-icon" onClick={sortFavTracks}>
                        {sortOrder ? <BsSortAlphaDownAlt /> : <BsSortAlphaDown />}
                    </div>
                </div>
            </div>

            <Card className="fav-wrapper">
                <Card.Body>
                    <FavHeader favTracks={favTracks} />

                    {favTracks.length === 0 ? (
                        <Card.Text className="list-text">The list is empty!</Card.Text>
                    ) : (
                        <div className="fav-container">
                            {favTracks.map((track) => {
                                if (isGrid) {
                                    return <FavSongCardVertical track={track} key={track.id} />;
                                } else {
                                    return <FavSongCardHorizontal track={track} key={track.id} />;
                                }
                            })}
                        </div>
                    )}
                </Card.Body>
            </Card>

            <Player idNumber={idNumber} closePlayer={closePlayer} isPlayerOpen={isPlayerOpen} />
        </>
    );
};

export default FavouritesPage;
