import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { BsHeartFill } from "react-icons/bs";
import "../styles/SearchBar.css";

const SearchBar = () => {
    const { fetchData, searchInput } = useGlobalContext();

    return (
        <Container className="search-wrapper">
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
                    <BsHeartFill className="icon" />
                </Link>
            </Button>
        </Container>
    );
};

export default SearchBar;
