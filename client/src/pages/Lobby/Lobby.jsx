import "./Lobby.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";

import { Link } from "react-router-dom";

function Lobby() {
    return (
        <div className="lobby-page">

            <Header username="Иван Иванов" />

            <div className="lobby-body">

                <Sidebar />

                <main className="lobby-content">

                    <h1>Комната ожидания</h1>

                    <p className="room-code">
                        Код комнаты
                    </p>

                    <div className="code">
                        487521
                    </div>

                    <div className="players">

                        <h3>Подключившиеся участники</h3>

                        <ul>
                            <li>Иван Иванов</li>
                            <li>Петр Петров</li>
                            <li>Анна Смирнова</li>
                            <li>Мария Орлова</li>
                        </ul>

                    </div>

                    <Link to="/quiz">
                        <Button text="Начать квиз" />
                    </Link>

                </main>

            </div>

        </div>
    );
}

export default Lobby;