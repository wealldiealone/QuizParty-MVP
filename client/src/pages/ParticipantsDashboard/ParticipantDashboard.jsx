import "./ParticipantDashboard.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function ParticipantDashboard() {

    return (

        <div className="participant-page">

            <Header username="Иван Иванов" />

            <div className="participant-body">

                <Sidebar />

                <main className="participant-content">

                    <h1>Личный кабинет</h1>

                    <p className="subtitle">
                        История участия в квизах
                    </p>

                    <div className="history-card">

                        <div className="history-row">
                            <span>История России</span>
                            <span>15 баллов</span>
                        </div>

                        <div className="history-row">
                            <span>Frontend MVP</span>
                            <span>18 баллов</span>
                        </div>

                        <div className="history-row">
                            <span>География</span>
                            <span>12 баллов</span>
                        </div>

                    </div>

                </main>

            </div>

        </div>

    );

}

export default ParticipantDashboard;