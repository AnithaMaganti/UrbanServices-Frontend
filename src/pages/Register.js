import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  const [message, setMessage] = useState(""); // Stores success/error messages
  const [messageColor, setMessageColor] = useState("black"); // Color for messages

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post("http://localhost:8080/api/user/register", formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      setMessage("✅ Account registered successfully! Redirecting to OTP verification...");
      setMessageColor("green");

      // Clear message after 3 seconds
      setTimeout(() => setMessage(""), 3000);

      // Redirect after 3 seconds
      setTimeout(() => {
        navigate("/otp-verify?email=" + formData.email);
      }, 3000);

    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registration failed. Try again.";
      setMessage("❌ " + errorMessage);
      setMessageColor("red");

      // Clear error message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow position-relative" style={{ width: "24rem" }}>
        {/* Close Button */}
        <button className="btn-close position-absolute top-0 end-0 m-2" onClick={() => navigate("/")}></button>

        <h2 className="text-center mb-3">Register</h2>

        {/* Success/Error Message Display ABOVE the form */}
        {message && <p className="text-center fw-bold" style={{ color: messageColor }}>{message}</p>}

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="form-control mb-2" onChange={handleChange} required />
          <select name="role" className="form-control mb-3" onChange={handleChange}>
            <option value="USER">User</option>
            <option value="TECHNICIAN">Technician</option>
            <option value="ADMIN">Admin</option>
          </select>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        {/* Already have an account? Login option */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
