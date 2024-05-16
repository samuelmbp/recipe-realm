import Form from "../../components/Form/Form";
import RecipeResponse from "../../types/RecipeResponse";
import "./CreateRecipe.scss";

const CreateRecipe = () => {
    const handleSubmit = async (recipe: RecipeResponse) => {
        const result = await fetch("http://localhost:8081/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        });

        if (result.ok) {
            alert("Recipe Added");
        } else {
            const message = await result.text();
            alert(message);
        }
    };

    const defaultFormState = {
        id: "",
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        preparationTime: "",
        cookingTime: "",
        totalTime: "",
        servings: 0,
        difficultyLevel: "",
        cuisine: "",
        mealType: "",
        dietaryInformation: "",
        calories: 0,
        nutritionalInformation: "",
        source: "",
        tags: "",
        image: "",
    };

    return (
        <section className="create-recipe">
            <h2 className="create-recipe__title">
                Don't be shy, create a recipe of your choice!
            </h2>
            <Form
                defaultFormState={defaultFormState}
                formTitle="Recipe"
                handleSubmit={handleSubmit}
            />
        </section>
    );
};

export default CreateRecipe;
