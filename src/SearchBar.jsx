import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const SearchBar = ({ fetchData, searchInput }) => {
    return (
        <Container className="form-container">
            <Form onSubmit={(e) => e.preventDefault()} className="form">
                <Form.Control
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={fetchData}
                    className="input"
                />
            </Form>
            <Button className="fav-btn">
                <Link to="/favourites" className="link">
                    Favourites
                </Link>
            </Button>
        </Container>
    );
};

export default SearchBar;
