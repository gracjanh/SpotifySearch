import React, { useEffect, useState } from "react";
import "./App.css";
import { BsSpotify } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import Content from "./Content";
import FavouritesPage from "./FavouritesPage";
import PlayerPage from "./PlayerPage";

const CLIENT_ID = "9d429f9e9b72431b91a082c3c7f221da";
const CLIENT_SECRET = "bdab65c9f16d4e4aa78697cf922195a3";

const App = () => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [data, setData] = useState("");
    const [tracks, setTracks] = useState([]);
    const [favTracks, setFavTracks] = useState([]);
    const [idNumber, setIdNumber] = useState("");

    useEffect(() => {
        const authParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        };

        fetch("https://accounts.spotify.com/api/token", authParams)
            .then((result) => result.json())
            .then((data) => setAccessToken(data.access_token));
    }, []);

    const fetchData = async (e) => {
        e.preventDefault();

        setSearchInput(e.target.value);
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        };

        fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, params)
            .then((response) => response.json())
            .then((data) => {
                const fetchedData = data.artists?.items[0];
                setData(fetchedData);

                return fetch(
                    `https://api.spotify.com/v1/artists/${fetchedData?.id}/top-tracks?country=US`,
                    params
                );
            })
            .then((response) => response.json())
            .then((data) => setTracks(data))
            .catch((err) => {
                console.error("Request failed", err);
            });
    };

    const deleteFavTrack = (track) => {
        const newList = favTracks.filter((item) => item.id !== track.id);
        setFavTracks(newList);
        // track.isFav = false;
    };

    const toggle = (track) => {
        const isOnFavList = favTracks.some((item) => item.id === track.id);

        if (isOnFavList) {
            // Delete a track from favourites
            const updatedFavTracks = favTracks.filter((item) => item.id !== track.id);
            setFavTracks(updatedFavTracks);
            // track.isFav = false;
        } else {
            // Add a track to favourites
            setFavTracks([...favTracks, track]);
            // track.isFav = true;
        }
    };

    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <SearchBar fetchData={fetchData} searchInput={searchInput} />
                                <Content
                                    data={data}
                                    tracks={tracks}
                                    favTracks={favTracks}
                                    deleteFavTrack={deleteFavTrack}
                                    toggle={toggle}
                                    setIdNumber={setIdNumber}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/favourites"
                        element={
                            <FavouritesPage favTracks={favTracks} deleteFavTrack={deleteFavTrack} />
                        }
                    />
                    <Route path="/player" element={<PlayerPage idNumber={idNumber} />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;