import "./CreateQuiz.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { Link } from "react-router-dom";

function CreateQuiz() {
    return (

        <div className="create-page">

            <Header username="Иван Иванов" />

            <div className="create-body">

                <Sidebar />

                <div className="create-content">

                    <h1>Создание квиза</h1>

                    <div className="form-grid">

                        <Input
                            label="Название"
                            type="text"
                            placeholder="Введите название"
                        />

                        <Input
                            label="Описание"
                            type="text"
                            placeholder="Введите описание"
                        />

                        <Input
                            label="Категория"
                            type="text"
                            placeholder="Например: История"
                        />

                        <Input
                            label="Время на вопрос (сек)"
                            type="number"
                            placeholder="30"
                        />

                        <Input
                            label="Количество вопросов"
                            type="number"
                            placeholder="10"
                        />

                    </div>

                    <div className="buttons">

                        <Link to="/add-question">
                            <Button text="Добавить вопрос" />
                        </Link>

                        <Button text="Сохранить квиз" />

                    </div>

                </div>

            </div>

        </div>

    );
}

export default CreateQuiz;