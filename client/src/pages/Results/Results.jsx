import "./Results.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Results() {
    return (
        <div className="results-page">

            <Header username="Иван Иванов" />

            <div className="results-body">

                <Sidebar />

                <main className="results-content">

                    <h1>Результаты квиза</h1>

                    <div className="leaderboard">

                        <div className="leaderboard-row winner">
                            <span>🥇 Иван Иванов</span>
                            <span>18</span>
                        </div>

                        <div className="leaderboard-row">
                            <span>🥈 Петр Петров</span>
                            <span>16</span>
                        </div>

                        <div className="leaderboard-row">
                            <span>🥉 Анна Смирнова</span>
                            <span>15</span>
                        </div>

                        <div className="leaderboard-row">
                            <span>Мария Орлова</span>
                            <span>12</span>
                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default Results;