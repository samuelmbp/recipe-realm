import { useNavigate, useParams } from "react-router-dom";
import "./EditRecipe.scss";
import { useEffect, useState } from "react";
import RecipeResponse from "../../types/RecipeResponse";
import Form from "../../components/Form/Form";
import Spinner from "../../components/Spinner/Spinner";

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState<RecipeResponse | null>(null);

    const getRecipeById = async (id: string) => {
        const url = `http://localhost:8081/recipe/${id}`;
        const response = await fetch(url);
        const recipeData = await response.json();
        setRecipe(recipeData);
    };

    useEffect(() => {
        if (id) {
            getRecipeById(id);
        }
    }, [id]);

    const handleUpdateRecipe = async (updateRecipe: RecipeResponse) => {
        const result = await fetch(`http://localhost:8081/recipe/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateRecipe),
        });

        if (result.ok) {
            alert("Recipe Updated");
            setRecipe(updateRecipe);
            navigate("/recipes");
        } else {
            const message = result.text();
            alert(message);
        }
    };

    if (!recipe) return <Spinner />;

    return (
        <section className="edit-recipe">
            <h2 className="edit-recipe__title">Edit Recipe</h2>
            <Form
                defaultFormState={recipe}
                formTitle="Update Recipe"
                handleSubmit={handleUpdateRecipe}
            />
        </section>
    );
};

export default EditRecipe;
