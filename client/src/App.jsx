import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import JoinQuiz from "./pages/JoinQuiz/JoinQuiz";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import OrganizerDashboard from "./pages/OrganizerDashboard/OrganizerDashboard";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";
import AddQuestion from "./pages/AddQuestion/AddQuestion";
import Lobby from "./pages/Lobby/Lobby";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";
import ParticipantDashboard from "./pages/ParticipantsDashboard/ParticipantDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/join" element={<JoinQuiz />} />
        <Route path="/dashboard" element={<OrganizerDashboard />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/add-question" element={<AddQuestion />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/participant" element={<ParticipantDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;