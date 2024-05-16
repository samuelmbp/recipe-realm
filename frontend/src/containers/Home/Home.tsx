import { useEffect, useState } from "react";
import heroImage from "../../assets/hero-image.jpg";
import RecipeResponse from "../../types/RecipeResponse";
import "./Home.scss";
import RecipeList from "../../components/RecipeList/RecipeList";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

    const getRecipes = async () => {
        const response = await fetch("http://localhost:8081/recipes");
        const recipeData: RecipeResponse[] = await response.json();
        const firstThreeRecipes = recipeData.slice(0, 3);
        setRecipes(firstThreeRecipes);
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <section className="home">
            <div className="home-hero">
                <img src={heroImage} alt="Hero Image" className="hero-image" />
                <div className="hero-text">
                    <h1 className="home-title">WELCOME TO RECIPE REALM!</h1>
                </div>
            </div>
            <About />
            <div className="home__recipes">
                <h2>Explore Some Delicious Recipes</h2>
                <RecipeList recipes={recipes} />
            </div>
            <Footer />
        </section>
    );
};

export default Home;
