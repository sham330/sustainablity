import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import WasteManagement from "./pages/WasteManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WasteManagement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
