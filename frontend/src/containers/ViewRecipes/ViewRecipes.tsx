import { useEffect, useState } from "react";
import RecipeResponse from "../../types/RecipeResponse";
import RecipeList from "../../components/RecipeList/RecipeList";

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
        <div>
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default ViewRecipes;
