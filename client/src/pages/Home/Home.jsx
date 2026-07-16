import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">

            <div className="home-card">

                <h1 className="logo">
                    QuizParty
                </h1>

                <p className="subtitle">
                    Добро пожаловать в систему проведения квизов
                </p>

                <Link to="/login" className="home-button">
                    Я организатор
                </Link>

                <Link to="/join" className="home-button secondary">
                    Я участник
                </Link>

            </div>

        </div>
    );
}

export default Home;