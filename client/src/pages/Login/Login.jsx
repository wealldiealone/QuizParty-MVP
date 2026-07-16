import "./Login.css";
import { Link } from "react-router-dom";

import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function Login() {
  return (
    <div className="login-page">

      <Card>

        <h1 className="logo">
          QuizParty
        </h1>

        <div className="divider"></div>

        <Input
          label="Email"
          type="email"
          placeholder="Введите email"
        />

        <Input
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
        />
        <Link to="/dashboard" className="button-link"> 
            <Button text="Войти" />
        </Link>

        <p className="register-text">
          Нет аккаунта?
          <Link to="/register">
            Зарегистрироваться
          </Link>
        </p>

      </Card>

    </div>
  );
}

export default Login;