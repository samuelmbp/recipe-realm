// TODO: Style the recipe card!

import { Link, useNavigate, useParams } from "react-router-dom";
import RecipeResponse from "../../types/RecipeResponse";
import Button from "../Button/Button";
import "./Recipe.scss";
import { useState } from "react";

type RecipeProp = {
    recipe: RecipeResponse;
};

const Recipe = ({ recipe }: RecipeProp) => {
    const navigate = useNavigate();
    const { id } = useParams();
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
    const [checkedInstructions, setCheckedInstructions] = useState<boolean[]>(
        new Array(instructions.length).fill(false)
    );

    const handleDeleteRecipe = async () => {
        const result = await fetch(`http://localhost:8081/recipe/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (result.ok) {
            alert("Recipe Deleted");
            navigate("/");
        } else {
            const message = result.text();
            alert(message);
        }
    };

    const ingredientsArr = ingredients.split(", ");
    const instructionsArr = instructions.split(".");

    const handleCheckboxChange = (index: number) => {
        const newCheckedInstructions = [...checkedInstructions];
        newCheckedInstructions[index] = !newCheckedInstructions[index];
        setCheckedInstructions(newCheckedInstructions);
    };

    const renderIngredients = () => {
        return ingredientsArr.map((ingredient, index) => (
            <li className="ingredient" key={index}>
                {ingredient.trim()}
            </li>
        ));
    };

    const renderInstructions = () => {
        return instructionsArr.map((instruction, index) => (
            <li key={index}>
                {instruction && (
                    <div className="instruction">
                        <input
                            type="checkbox"
                            checked={checkedInstructions[index]}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        <p
                            className={`instruction__text ${
                                checkedInstructions[index] ? "checked" : ""
                            }`}
                        >
                            {instruction.trim()}
                        </p>
                    </div>
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
                    <div className="recipe__buttons">
                        <Link
                            to={`/recipe/edit/${recipe.id}`}
                            style={{ width: "100%" }}
                        >
                            <Button label="Update Recipe" />
                        </Link>
                        <Button
                            label="Delete Recipe"
                            variant="danger"
                            onClick={handleDeleteRecipe}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Recipe;
