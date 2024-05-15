import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./BriefRecipe.scss";

type BriefRecipeProps = {
    title: string;
    description: string;
    id: string;
};

const BriefRecipe = ({ title, description, id }: BriefRecipeProps) => {
    return (
        <div className="brief-recipe">
            {/* TODO: ADD IMAGE */}
            <div className="brief-recipe__content">
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
