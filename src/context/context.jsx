import { useEffect, useState, createContext, useContext } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState("");
    const [tracks, setTracks] = useState("");
    const [favTracks, setFavTracks] = useState([]);
    const [favBoolObj, setFavBoolObj] = useState({});
    const [idNumber, setIdNumber] = useState("");
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);
    const [isGrid, setIsGrid] = useState(true);
    const [sortOrder, setSortOrder] = useState(false);

    const CLIENT_ID = "CLIENT ID";
    const CLIENT_SECRET = "CLIENT SECRET";

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
    }, [accessToken]);

    useEffect(() => {
        const storedFavTracks = localStorage.getItem("favTracks");
        const storedFavBoolObj = localStorage.getItem("favBoolObj");
        const storedData = localStorage.getItem("data");
        const storedTracks = localStorage.getItem("tracks");
        const storedLayout = localStorage.getItem("isGrid");
        const storedOrder = localStorage.getItem("sortOrder");
        const storedInput = localStorage.getItem("searchInput");

        if (storedFavTracks) setFavTracks(JSON.parse(storedFavTracks));
        if (storedFavBoolObj) setFavBoolObj(JSON.parse(storedFavBoolObj));
        if (storedData) setData(JSON.parse(storedData));
        if (storedTracks) setTracks(JSON.parse(storedTracks));
        if (storedLayout) setIsGrid(JSON.parse(storedLayout));
        if (storedOrder) setSortOrder(JSON.parse(storedOrder));
        if (storedInput) setSearchInput(JSON.parse(storedInput));
    }, []);

    useEffect(() => {
        localStorage.setItem("favTracks", JSON.stringify(favTracks));
        localStorage.setItem("favBoolObj", JSON.stringify(favBoolObj));
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.setItem("tracks", JSON.stringify(tracks));
        localStorage.setItem("isGrid", JSON.stringify(isGrid));
        localStorage.setItem("sortOrder", JSON.stringify(sortOrder));
        localStorage.setItem("searchInput", JSON.stringify(searchInput));
    }, [favTracks, favBoolObj, data, tracks, isGrid, sortOrder, searchInput]);

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

    const renderHeartIcon = (track, value) => {
        const newObj = { ...favBoolObj, [`${track.name}`]: value }; // Add new property depending on track name
        setFavBoolObj(newObj);
    };

    const toggleFavourite = (track) => {
        const isOnFavList = favTracks.some((item) => item.id === track.id);

        if (isOnFavList) {
            // Delete a track from favourites
            const newFavTracks = favTracks.filter((item) => item.id !== track.id);
            setFavTracks(newFavTracks);
            renderHeartIcon(track, false);
        } else {
            // Add a track to favourites
            setFavTracks([...favTracks, track]);
            renderHeartIcon(track, true);
        }
    };

    const showPlayer = (id) => {
        setIdNumber(id);
        setIsPlayerOpen(true);
    };
    const closePlayer = () => {
        setIsPlayerOpen(false);
    };

    const changeView = () => {
        setIsGrid(!isGrid);
    };

    const sortFavTracks = () => {
        setSortOrder(!sortOrder);

        const sortedTracks = favTracks.sort((a, b) => {
            if (sortOrder) {
                if (b.name < a.name) return -1;
                if (b.name > a.name) return 1;
            } else {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
            }
            return 0;
        });

        setFavTracks(sortedTracks);
    };

    return (
        <AppContext.Provider
            value={{
                searchInput,
                setSearchInput,
                data,
                setData,
                fetchData,
                tracks,
                setTracks,
                favTracks,
                setFavTracks,
                favBoolObj,
                setFavBoolObj,
                idNumber,
                setIdNumber,
                isPlayerOpen,
                setIsPlayerOpen,
                toggleFavourite,
                showPlayer,
                closePlayer,
                isGrid,
                changeView,
                sortFavTracks,
                sortOrder,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
