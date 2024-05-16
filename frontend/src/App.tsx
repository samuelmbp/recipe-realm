import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./containers/Home/Home";
import ViewRecipes from "./containers/ViewRecipes/ViewRecipes";
import Nav from "./components/Nav/Nav";
import ViewRecipe from "./containers/ViewRecipe/ViewRecipe";
import CreateRecipe from "./containers/CreateRecipe/CreateRecipe";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<ViewRecipes />} />
                <Route path="/recipe/:id" element={<ViewRecipe />} />
                <Route path="/recipe/create" element={<CreateRecipe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
