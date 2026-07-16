import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [role, setRole] = useState("participant");

  return (
    <div className="register-page">

      <div className="register-container">

        <h1 className="logo">
          QuizParty
          <span></span>
        </h1>

        <h2 className="register-title">Регистрация</h2>

        <p className="register-subtitle">
          Создайте аккаунт для участия
          <br />
          или проведения квизов
        </p>

        <form className="register-form">

          <label>Имя</label>
          <input type="text" />

          <label>Email</label>
          <input type="email" />

          <label>Пароль</label>
          <input type="password" />

          <label>Подтвердите пароль</label>
          <input type="password" />

          <label>Выберите роль</label>

          <div className="role-buttons">
            <button
              type="button"
              className={role === "participant" ? "role-btn active" : "role-btn"}
              onClick={() => setRole("participant")}
            >
              Участник
            </button>

            <button
              type="button"
              className={role === "organizer" ? "role-btn active" : "role-btn"}
              onClick={() => setRole("organizer")}
            >
              Организатор
            </button>
          </div>

          <button className="register-btn">
            Создать аккаунт
          </button>

        </form>

        <div className="login-section">
          <p>Уже есть аккаунт?</p>

          <Link to="/login">
            <button className="login-btn">
              Войти
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Register;