import "./Quiz.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";

import { Link } from "react-router-dom";

function Quiz() {
    return (
        <div className="quiz-page">

            <Header username="Иван Иванов" />

            <div className="quiz-body">

                <Sidebar />

                <main className="quiz-content">

                    <h1>Вопрос 1 из 10</h1>

                    <div className="question-card">

                        <h2>
                            Какая столица Франции?
                        </h2>

                        <div className="answers">

                            <button className="answer-btn">
                                Берлин
                            </button>

                            <button className="answer-btn">
                                Париж
                            </button>

                            <button className="answer-btn">
                                Рим
                            </button>

                            <button className="answer-btn">
                                Мадрид
                            </button>

                        </div>

                        <div className="quiz-footer">

                            <span>Осталось: 25 сек.</span>

                            <Link to="/results">
                                <Button text="Следующий вопрос" />
                            </Link>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default Quiz;