const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {

    res.json({
        success: true,
        message: "Авторизация выполнена"
    });

});

router.post("/register", (req, res) => {

    res.json({
        success: true,
        message: "Пользователь зарегистрирован"
    });

});

module.exports = router;