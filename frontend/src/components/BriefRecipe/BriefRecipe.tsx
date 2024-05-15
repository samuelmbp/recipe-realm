import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./BriefRecipe.scss";

type BriefRecipeProps = {
    title: string;
    description: string;
    id: string;
    image: string;
};

const BriefRecipe = ({ title, description, id, image }: BriefRecipeProps) => {
    return (
        <div className="brief-recipe">
            <div className="brief-recipe__content">
                <img className="brief-recipe__image" src={image} alt={title} />
                <h2 className="brief-recipe__title">{title}</h2>
                <p className="brief-recipe__description">{description}</p>
            </div>
            <div className="brief-recipe__button">
                <Link to={`/recipe/${id}`}>
                    <Button label="View Recipe" />
                </Link>
            </div>
        </div>
    );
};

export default BriefRecipe;
