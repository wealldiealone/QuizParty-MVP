import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <Link to="/dashboard">
        <button>Главная</button>
      </Link>

      <Link to="#">
        <button>История</button>
      </Link>

      <Link to="#">
        <button>Мои квизы</button>
      </Link>

      <Link to="#">
        <button>Настройки</button>
      </Link>

    </aside>
  );
}

export default Sidebar;