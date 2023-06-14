import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import Content from "./Content";
import FavouritesPage from "../pages/FavouritesPage";

const App = () => {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <SearchBar />
                                <Content />
                            </>
                        }
                    />
                    <Route path="/favourites" element={<FavouritesPage />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;
