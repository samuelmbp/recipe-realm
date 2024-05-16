import { useEffect, useState } from "react";
import "./RandomRecipe.scss";
import RecipeResponse from "../../types/RecipeResponse";
import Recipe from "../../components/Recipe/Recipe";
import Spinner from "../../components/Spinner/Spinner";

const RandomRecipe = () => {
    const [randomRecipe, setRandomRecipe] = useState<RecipeResponse | null>(
        null
    );

    const getRandomRecipe = async () => {
        const response = await fetch("http://localhost:8081/recipe/random");
        const data = await response.json();
        setRandomRecipe(data);
    };

    useEffect(() => {
        getRandomRecipe();
    }, []);

    if (!randomRecipe) return <Spinner />;
    return (
        <>
            <h2>Random Recipe</h2>
            <Recipe recipe={randomRecipe} />
        </>
    );
};

export default RandomRecipe;
