import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserSettings from "./components/UserSettings";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<UserSettings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
