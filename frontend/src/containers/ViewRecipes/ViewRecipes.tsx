import { useEffect, useState } from "react";
import RecipeResponse from "../../types/RecipeResponse";
import RecipeList from "../../components/RecipeList/RecipeList";
import "./ViewRecipes.scss";

const ViewRecipes = () => {
    const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

    const getRecipes = async () => {
        const response = await fetch("http://localhost:8081/recipes");
        const recipeData = await response.json();
        setRecipes(recipeData);
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <section className="view-recipes">
            <h2 className="view-recipes__title">
                Some of the recipes you might like...
            </h2>
            <RecipeList recipes={recipes} />
        </section>
    );
};

export default ViewRecipes;
