import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/user/login", formData);
      alert(response.data.message);
      navigate("/"); // Redirect to dashboard/home page
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow position-relative" style={{ width: "24rem" }}>
        {/* Close Button */}
        <button onClick={() => navigate("/")} className="btn-close position-absolute top-0 end-0 m-2"></button>

        <h2 className="text-center mb-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50">Login</button>
          </div>
        </form>

        {/* Signup Link */}
        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")} className="btn btn-link p-0">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
