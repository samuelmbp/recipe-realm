import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./containers/Home/Home";
import ViewRecipes from "./containers/ViewRecipes/ViewRecipes";
import Nav from "./components/Nav/Nav";
import ViewRecipe from "./containers/ViewRecipe/ViewRecipe";
import CreateRecipe from "./containers/CreateRecipe/CreateRecipe";
import EditRecipe from "./containers/EditRecipe/EditRecipe";
import RandomRecipe from "./containers/RandomRecipe/RandomRecipe";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<ViewRecipes />} />
                <Route path="/recipe/:id" element={<ViewRecipe />} />
                <Route path="/recipe/create" element={<CreateRecipe />} />
                <Route path="/recipe/edit/:id" element={<EditRecipe />} />
                <Route path="/recipe/random" element={<RandomRecipe />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
