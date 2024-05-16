import { FormEvent, useState } from "react";
import RecipeResponse from "../../types/RecipeResponse";
import "./Form.scss";

type FormProps = {
    defaultFormState: RecipeResponse;
    formTitle: string;
    handleSubmit: (recipe: RecipeResponse) => void;
};

const Form = ({ defaultFormState, formTitle, handleSubmit }: FormProps) => {
    const [recipe, setRecipe] = useState<RecipeResponse>(defaultFormState);

    const handleValidation = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(recipe);
        // TODO: EMPTY FIELDS AFTER SUBMISSION
    };

    const handleInput = (event: FormEvent<HTMLInputElement>, key: string) => {
        setRecipe({ ...recipe, [key]: event.currentTarget.value });
    };

    return (
        <div className="form-container">
            <h2 className="form-container__title">{formTitle}</h2>
            <form className="form-container__form" onSubmit={handleValidation}>
                <label htmlFor="title">Title:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="title"
                    value={recipe.title}
                    onInput={(event) => handleInput(event, "title")}
                />

                <label htmlFor="description">Description:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="description"
                    value={recipe.description}
                    onInput={(event) => handleInput(event, "description")}
                />

                <label htmlFor="ingredients">Ingredients:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="ingredients"
                    placeholder="Enter comma (,) separated ingredients. E.g.: eggs, 200g rice, sesame oil"
                    value={recipe.ingredients}
                    onInput={(event) => handleInput(event, "ingredients")}
                />

                <label htmlFor="instructions">Instructions:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="instructions"
                    value={recipe.instructions}
                    onInput={(event) => handleInput(event, "instructions")}
                />

                <label htmlFor="preparationTime">Preparation Time:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="preparationTime"
                    value={recipe.preparationTime}
                    onInput={(event) => handleInput(event, "preparationTime")}
                />

                <label htmlFor="cookingTime">Cooking Time:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="cookingTime"
                    value={recipe.cookingTime}
                    onInput={(event) => handleInput(event, "cookingTime")}
                />

                <label htmlFor="totalTime">Total Time:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="totalTime"
                    value={recipe.totalTime}
                    onInput={(event) => handleInput(event, "totalTime")}
                />

                <label htmlFor="servings">Servings:</label>
                <input
                    className="form-container__input"
                    type="number"
                    id="servings"
                    value={recipe.servings}
                    onInput={(event) => handleInput(event, "servings")}
                />

                <label htmlFor="difficultyLevel">Difficulty Level:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="difficultyLevel"
                    placeholder="E.g: Easy | Medium | Intermediate"
                    value={recipe.difficultyLevel}
                    onInput={(event) => handleInput(event, "difficultyLevel")}
                />

                <label htmlFor="cuisine">Cuisine:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="cuisine"
                    placeholder="E.g.: Asian"
                    value={recipe.cuisine}
                    onInput={(event) => handleInput(event, "cuisine")}
                />

                <label htmlFor="mealType">Meal Type:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="mealType"
                    placeholder="E.g.: Lunch/Dinner"
                    value={recipe.mealType}
                    onInput={(event) => handleInput(event, "mealType")}
                />

                <label htmlFor="dietaryInformation">Dietary Information:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="dietaryInformation"
                    placeholder="E.g.: Vegetarian | Contains Meat"
                    value={recipe.dietaryInformation}
                    onInput={(event) =>
                        handleInput(event, "dietaryInformation")
                    }
                />

                <label htmlFor="calories">Calories:</label>
                <input
                    className="form-container__input"
                    type="number"
                    id="calories"
                    value={recipe.calories}
                    onInput={(event) => handleInput(event, "calories")}
                />

                <label htmlFor="nutritionalInformation">
                    Nutritional Information:
                </label>
                <input
                    className="form-container__input"
                    type="text"
                    id="nutritionalInformation"
                    placeholder="E.g.: protein: 25g, carbohydrates: 45g, fat: 20g, fiber: 5g"
                    value={recipe.nutritionalInformation}
                    onInput={(event) =>
                        handleInput(event, "nutritionalInformation")
                    }
                />

                <label htmlFor="source">Source:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="source"
                    value={recipe.source}
                    placeholder="Link to a similar recipe"
                    onInput={(event) => handleInput(event, "source")}
                />

                <label htmlFor="tags">Tags:</label>
                <input
                    className="form-container__input"
                    type="text"
                    placeholder="E.g., High Protein, Low Carbs, Healthy"
                    id="tags"
                    value={recipe.tags}
                    onInput={(event) => handleInput(event, "tags")}
                />

                <label htmlFor="image">Image Link:</label>
                <input
                    className="form-container__input"
                    type="text"
                    id="image"
                    placeholder="Paste Image URL Here..."
                    value={recipe.image}
                    onInput={(event) => handleInput(event, "image")}
                />

                <button type="submit" className="form-container__button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
