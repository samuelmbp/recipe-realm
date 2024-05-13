import RecipeResponse from "../../types/RecipeResponse";

type RecipeProp = {
    recipe: RecipeResponse;
};

const Recipe = ({ recipe }: RecipeProp) => {
    const {
        title,
        description,
        ingredients,
        instructions,
        preparationTime,
        cookingTime,
        totalTime,
        servings,
        difficultyLevel,
        cuisine,
        mealType,
        dietaryInformation,
        calories,
        nutritionalInformation,
        tags,
    } = recipe;

    return (
        <div className="recipe">
            <h3 className="recipe__title">{title}</h3>
            <p className="recipe__description">Description: {description}</p>
            <p className="recipe__ingredients">Ingredients: {ingredients}</p>
            <p className="recipe__instruction">Instructions: {instructions}</p>
            <p className="recipe__preparationtime">
                Preparation Time: {preparationTime}
            </p>
            <p className="recipe__cookingtime">Cooking Time: {cookingTime}</p>
            <p className="recipe__totaltime">Total Time: {totalTime}</p>
            <p className="recipe__servings">Servings: {servings}</p>
            <p className="recipe__difficulty">
                Difficulty Level: {difficultyLevel}
            </p>
            <p className="recipe__cuisine">Cuisine: {cuisine}</p>
            <p className="recipe__mealtime">Meal Type: {mealType}</p>
            <p className="recipe__dietaryinformation">
                Dietary Information: {dietaryInformation}
            </p>
            <p className="recipe__calories">Calories: {calories}</p>
            <p className="recipe__nutritionalinformation">
                Nutritional Information: {nutritionalInformation}
            </p>
            <p className="recipe__tags"># {tags}</p>
        </div>
    );
};

export default Recipe;
