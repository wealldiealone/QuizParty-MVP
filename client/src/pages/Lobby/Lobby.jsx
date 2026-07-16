import "./Lobby.css";

import DashboardLayout from "../../layouts/DashboardLayout";
import Button from "../../components/Button/Button";

import { Link } from "react-router-dom";

function Lobby() {

    return (

        <DashboardLayout>

            <div className="lobby">

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

                    <Button text="Начать квиз"/>

                </Link>

            </div>

        </DashboardLayout>

    );

}

export default Lobby;