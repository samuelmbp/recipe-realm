import RecipeResponse from "../../types/RecipeResponse";
import Recipe from "../Recipe/Recipe";

type RecipesListProps = {
    recipes: RecipeResponse[];
};

const RecipeList = ({ recipes }: RecipesListProps) => {
    return (
        <>
            <div className="greeting-list">
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </>
    );
};

export default RecipeList;
