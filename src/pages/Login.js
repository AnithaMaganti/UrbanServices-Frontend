import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../components/AuthContext"; // ✅ Import global state
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, loadUser } = useContext(AuthContext); // ✅ Use global state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/user/login", formData);

      if (response.data.success) {
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("token", response.data.token);

        await loadUser(); // ✅ Update user state immediately

        alert("Login successful!");
        navigate("/");
      } else {
        alert("Login failed: " + (response.data.message || "Invalid credentials"));
      }
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || "Server error"));
    } finally {
      setLoading(false);
    }
  };

  // ✅ Forgot Password Function
  const handleForgotPassword = async () => {
    const email = prompt("Enter your email to reset the password:");
    if (!email) return;
  
    try {
      const response = await axios.post(
        `http://localhost:8080/api/user/forgot-password?email=${encodeURIComponent(email)}`
      );
      alert(response.data.message);
    } catch (error) {
      alert("Failed to send reset link: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow position-relative" style={{ width: "24rem" }}>
        <button onClick={() => navigate("/")} className="btn-close position-absolute top-0 end-0 m-2"></button>
        <h2 className="text-center mb-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* ✅ Forgot Password Link */}
        <p className="mt-2 text-center">
          <button onClick={handleForgotPassword} className="btn btn-link p-0">Forgot Password?</button>
        </p>

        {/* ✅ Sign Up Link */}
        <p className="mt-2 text-center">
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")} className="btn btn-link p-0">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
