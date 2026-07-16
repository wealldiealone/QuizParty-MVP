const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json([
        {
            id: 1,
            title: "История России"
        },
        {
            id: 2,
            title: "Frontend"
        }
    ]);

});

router.post("/", (req, res) => {

    res.json({
        success: true,
        message: "Квиз создан"
    });

});

module.exports = router;
