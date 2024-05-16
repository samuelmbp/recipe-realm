import { Link } from "react-router-dom";
import logo from "../../assets/recipe-logo.png";
import "./Nav.scss";

const Nav = () => {
    return (
        <div className="nav">
            <img className="nav__logo" src={logo} alt="Recipe Logo Book" />
            <div className="nav__links">
                <Link className="nav__item" to="/">
                    Home
                </Link>

                <Link className="nav__item" to="/recipes">
                    Recipes
                </Link>

                <Link className="nav__item" to="/recipe/create">
                    Add Recipe
                </Link>
            </div>
        </div>
    );
};

export default Nav;
