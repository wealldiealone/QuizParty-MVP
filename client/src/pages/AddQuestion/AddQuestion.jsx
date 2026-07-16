import "./AddQuestion.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { Link } from "react-router-dom";

function AddQuestion() {

    return (

        <div className="question-page">

            <Header username="Иван Иванов" />

            <div className="question-body">

                <Sidebar />

                <div className="question-content">

                    <h1>Добавление вопроса</h1>

                    <Input
                        label="Текст вопроса"
                        type="text"
                        placeholder="Введите вопрос"
                    />

                    <div className="question-type">

                        <label>Тип вопроса</label>

                        <select>

                            <option>Один правильный ответ</option>

                            <option>Несколько правильных ответов</option>

                        </select>

                    </div>

                    <Input
                        label="Ответ 1"
                        type="text"
                        placeholder="Введите вариант"
                    />

                    <Input
                        label="Ответ 2"
                        type="text"
                        placeholder="Введите вариант"
                    />

                    <Input
                        label="Ответ 3"
                        type="text"
                        placeholder="Введите вариант"
                    />

                    <Input
                        label="Ответ 4"
                        type="text"
                        placeholder="Введите вариант"
                    />

                    <div className="buttons">

                        <Button text="Сохранить вопрос"/>

                        <Link to="/lobby">

                            <Button text="Завершить"/>

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AddQuestion;