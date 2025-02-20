import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import Register from "./pages/Register";
import Home from "./pages/Home";
import ACRepair from "./components/services/ACRepair";
import OtpVerify from "./pages/OtpVerify";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ac-repair" element={<ACRepair />} /> {/* Use the element prop */}
        <Route path="/otp-verify" element={<OtpVerify />} />
      </Routes>
    </Router>
    
  );
}

export default App;
