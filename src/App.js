import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter here, not twice
import Navbar from "./components/Navbar";
import NavbarMblView from "./components/NavbarMblView";
import RequiresAuth from "./components/RequiresAuth";
import Note from "./pages/Note";
import ArchivePage from "./pages/ArchivePage";
import TrashPage from "./pages/TrashPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "react-hot-toast";
import { NoteProvider } from "./context/NoteContext";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <NoteProvider>
        <Router>
          <AuthProvider>
            <div className="navbar-desktop-view">
              <Navbar />
            </div>
            <div className="navbar-mbl-view">
              <NavbarMblView />
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
            <Toaster
              position="top-center"
              toastOptions={{ className: "toast", duration: 1000 }}
            />
          </AuthProvider>
        </Router>
      </NoteProvider>
    </div>
  );
}

export default App;
