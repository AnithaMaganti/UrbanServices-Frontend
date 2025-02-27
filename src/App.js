import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import Register from "./pages/Register";
import Home from "./pages/Home";
import ACRepair from "./components/services/ACRepair";
import OtpVerify from "./pages/OtpVerify";
import UserMenu from "./components/UserMenu";
import ResetPassword from "./pages/ResetPassword";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ac-repair" element={<ACRepair />} /> {/* Use the element prop */}
        <Route path="/otp-verify" element={<OtpVerify />} />
        <Route path="/user-menu" element={<UserMenu />} />
        <Route path="/reset-password" element={<ResetPassword />} />

      </Routes>
    </Router>
    
  );
}

export default App;
