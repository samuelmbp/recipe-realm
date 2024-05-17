import { FormEvent, useEffect, useState } from "react";
import RecipeResponse from "../../types/RecipeResponse";
import RecipeList from "../../components/RecipeList/RecipeList";
import "./ViewRecipes.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

const ViewRecipes = () => {
    const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
    const [searchRecipe, setSearchRecipe] = useState<string>("");

    const getRecipes = async () => {
        const response = await fetch("http://localhost:8081/recipes");
        const recipeData: RecipeResponse[] = await response.json();
        const filteredRecipes = recipeData.filter((recipe) => {
            return recipe.title.toLowerCase().includes(searchRecipe);
        });
        setRecipes(filteredRecipes);
    };

    useEffect(() => {
        getRecipes();
    }, [searchRecipe]);

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase();
        setSearchRecipe(input);
    };

    return (
        <section className="view-recipes">
            <h2 className="view-recipes__title">
                Unlock Your Inner Chef With Delicious Recipes.
            </h2>
            <SearchBox
                label="search for your favorite recipe"
                handleInput={handleInput}
                searchTerm={searchRecipe}
            />
            <RecipeList recipes={recipes} />
        </section>
    );
};

export default ViewRecipes;
