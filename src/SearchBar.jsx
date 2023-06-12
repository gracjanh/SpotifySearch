import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import { BsHeartFill } from "react-icons/bs";

const SearchBar = () => {
    const { fetchData, searchInput } = useGlobalContext();

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
                    <BsHeartFill className="fav-icon" />
                </Link>
            </Button>
        </Container>
    );
};

export default SearchBar;
