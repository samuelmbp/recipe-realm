// TODO: Style the recipe card!

import RecipeResponse from "../../types/RecipeResponse";
import "./Recipe.scss";

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

    const ingredientsArr = ingredients.split(", ");
    const instructionsArr = instructions.split(".");

    const renderIngredients = () => {
        return ingredientsArr.map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
        ));
    };

    const renderInstructions = () => {
        return instructionsArr.map((instruction, index) => (
            <li key={index}>
                {instruction && (
                    <>
                        <span className="step-number">{index + 1}.</span>{" "}
                        {instruction.trim()}
                    </>
                )}
            </li>
        ));
    };

    return (
        <>
            <section className="recipe-section">
                <div>
                    <img
                        className="recipe-image"
                        src={recipe.image}
                        alt={recipe.title}
                    />
                </div>
                <div className="recipe">
                    <h2 className="recipe__title">{title}</h2>
                    <div className="recipe__info">
                        <p className="recipe__description">{description}</p>
                        <div className="recipe__details">
                            <p>
                                <strong>Preparation Time:</strong>{" "}
                                {preparationTime}
                            </p>
                            <p>
                                <strong>Cooking Time:</strong> {cookingTime}
                            </p>
                            <p>
                                <strong>Total Time:</strong> {totalTime}
                            </p>
                            <p>
                                <strong>Servings:</strong> {servings}
                            </p>
                            <p>
                                <strong>Difficulty Level:</strong>{" "}
                                {difficultyLevel}
                            </p>
                            <p>
                                <strong>Cuisine:</strong> {cuisine}
                            </p>
                            <p>
                                <strong>Meal Type:</strong> {mealType}
                            </p>
                            <p>
                                <strong>Dietary Information:</strong>{" "}
                                {dietaryInformation}
                            </p>
                            <p>
                                <strong>Calories:</strong> {calories}
                            </p>
                            <p>
                                <strong>Nutritional Information:</strong>{" "}
                                {nutritionalInformation}
                            </p>
                            <p>
                                <strong>Tags:</strong> {tags}
                            </p>
                        </div>
                    </div>
                    <div className="recipe__ingredients">
                        <h3>Ingredients</h3>
                        <ul>{renderIngredients()}</ul>
                    </div>
                    <div className="recipe__instructions">
                        <h3>Instructions</h3>
                        <ol>{renderInstructions()}</ol>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Recipe;
