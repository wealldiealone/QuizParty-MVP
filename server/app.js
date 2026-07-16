const express = require("express");

const authRoutes = require("./routes/auth");
const quizRoutes = require("./routes/quiz");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "QuizParty API работает"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);

module.exports = app;