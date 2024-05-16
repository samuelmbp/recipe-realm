import { Link } from "react-router-dom";
import githubIcon from "../../assets/github-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <Link
                    to="https://github.com/samuelmbp"
                    className="footer__link"
                    target="_blank"
                >
                    <img
                        className="footer__icon"
                        src={githubIcon}
                        alt="GitHub Icon"
                    />
                </Link>
                <a
                    className="footer__link"
                    href="https://www.linkedin.com/in/samuel-raducan/"
                    target="_blank"
                >
                    <img
                        className="footer__icon"
                        src={linkedinIcon}
                        alt="LinkedIn Icon"
                    />
                </a>
            </div>
            <div className="footer__body">
                <p className="footer__copyright">
                    &copy; 2024 Samuel Raducan |{" "}
                    <span className="footer__logo">Recipe Realm</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
