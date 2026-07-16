import "./OrganizerDashboard.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

function OrganizerDashboard() {
  return (
    <div className="dashboard">

      <Header username="Иван Иванов" />

      <div className="dashboard-body">

        <Sidebar />

        <main className="dashboard-content">

          <h1>Добро пожаловать!</h1>

          <p>
            Здесь вы можете создавать, <br />
            редактировать и запускать квизы,
            <br />
            а также смотреть историю их проведения.
          </p>

          <Link to="/create-quiz">
            <button className="create-btn">
              Создать квиз
            </button>
          </Link>

        </main>

      </div>

    </div>
  );
}

export default OrganizerDashboard;