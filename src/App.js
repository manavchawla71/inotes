import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter here, not twice
import Navbar from "./components/Navbar";
import RequiresAuth from "./components/RequiresAuth";
import Note from "./pages/Note";
import ArchivePage from "./pages/ArchivePage";
import TrashPage from "./pages/TrashPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { NoteProvider } from "./context/NoteContext";
function App() {
  return (
    <div className="App">
      <NoteProvider>
        <Router>
          <div className="navbar-desktop-view">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/note"
              element={
                <RequiresAuth>
                  <Note />
                </RequiresAuth>
              }
            />
            <Route
              path="/archive"
              element={
                <RequiresAuth>
                  <ArchivePage />
                </RequiresAuth>
              }
            />
            <Route
              path="/trash"
              element={
                <RequiresAuth>
                  <TrashPage />
                </RequiresAuth>
              }
            />
          </Routes>
        </Router>
      </NoteProvider>
    </div>
  );
}

export default App;
