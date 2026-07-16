import "./JoinQuiz.css";
import { Link } from "react-router-dom";

function JoinQuiz() {

    return (

        <div className="join-page">

            <div className="join-card">

                <h1 className="logo">
                    QuizParty
                </h1>

                <p className="subtitle">
                    Подключение к квизу
                </p>

                <label>
                    Код комнаты
                </label>

                <input
                    type="text"
                    placeholder="Введите код комнаты"
                />

                <Link to="/lobby" className="join-button">
                    Подключиться
                </Link>

            </div>

        </div>

    );

}

export default JoinQuiz;