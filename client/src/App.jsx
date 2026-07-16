import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import CreateQuiz from "./pages/CreateQuiz";
import AddQuestion from "./pages/AddQuestion";
import Lobby from "./pages/Lobby";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import ParticipantDashboard from "./pages/ParticipantDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
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