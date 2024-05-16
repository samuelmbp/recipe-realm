import { useEffect, useState } from "react";
import "./ViewRecipe.scss";
import RecipeResponse from "../../types/RecipeResponse";
import { useParams } from "react-router-dom";
import Recipe from "../../components/Recipe/Recipe";
import Spinner from "../../components/Spinner/Spinner";

const ViewRecipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<RecipeResponse | null>(null);

    const getRecipeById = async (id: string) => {
        const response = await fetch(`http://localhost:8081/recipe/${id}`);
        const data = await response.json();
        setRecipe(data);
    };

    useEffect(() => {
        if (id) {
            getRecipeById(id);
        }
    }, [id]);

    if (!recipe) return <Spinner />;

    return (
        <section className="view-recipe">
            <h2 className="view-recipe__title">Food for the soul</h2>
            <Recipe recipe={recipe} />
        </section>
    );
};

export default ViewRecipe;
