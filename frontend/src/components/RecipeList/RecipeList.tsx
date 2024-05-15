import RecipeResponse from "../../types/RecipeResponse";
import BriefRecipe from "../BriefRecipe/BriefRecipe";
// import Recipe from "../Recipe/Recipe";
import "./RecipeList.scss";

type RecipesListProps = {
    recipes: RecipeResponse[];
};

const RecipeList = ({ recipes }: RecipesListProps) => {
    return (
        <>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <BriefRecipe
                        key={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        id={recipe.id}
                        image={recipe.image}
                    />
                ))}
            </div>
        </>
    );
};

export default RecipeList;
