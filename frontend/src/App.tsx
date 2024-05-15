import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./containers/Home/Home";
import ViewRecipes from "./containers/ViewRecipes/ViewRecipes";
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<ViewRecipes />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
