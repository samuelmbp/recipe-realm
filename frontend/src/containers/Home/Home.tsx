import heroImage from "../../assets/hero-image.jpg";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="home-hero">
                <img src={heroImage} alt="Hero Image" className="hero-image" />
                <div className="hero-text">
                    <h1 className="home-title">WELCOME TO RECIPE REALM!</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
