import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Player from "../components/Player";
import FavHeader from "../components/FavHeader";
import { useGlobalContext } from "../context/context";
import { BsGrid, BsListUl, BsSortAlphaDownAlt, BsSortAlphaDown, BsArrowLeft } from "react-icons/bs";
import FavSongCardVertical from "../components/FavSongCardVertical";
import FavSongCardHorizontal from "../components/FavSongCardHorizontal";
import "../styles/FavouritesPage.css";

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
            <div className="top-wrapper">
                <Button className="back-btn">
                    <Link to="/" className="link">
                        <BsArrowLeft className="arrow-icon" />
                    </Link>
                </Button>

                <div className="icons-wrapper">
                    <div className="layout-icon" onClick={changeView}>
                        {isGrid ? <BsListUl /> : <BsGrid />}
                    </div>
                    <div className="sort-icon" onClick={sortFavTracks}>
                        {sortOrder ? <BsSortAlphaDownAlt /> : <BsSortAlphaDown />}
                    </div>
                </div>
            </div>

            <Card className="fav-content-wrapper">
                <Card.Body>
                    <FavHeader favTracks={favTracks} />

                    {favTracks.length === 0 ? (
                        <Card.Text className="list-text">The list is empty!</Card.Text>
                    ) : (
                        <div className="fav-cards-wrapper">
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
