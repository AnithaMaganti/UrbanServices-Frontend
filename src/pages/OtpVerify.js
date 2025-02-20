import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState(""); // Success/error message
  const [messageColor, setMessageColor] = useState("text-dark"); // Bootstrap color classes

  const location = useLocation();
  const navigate = useNavigate();
  const email = new URLSearchParams(location.search).get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/otp/validate",
        { email, otp }
      );

      setMessage("✅ OTP Verified Successfully! Redirecting...");
      setMessageColor("text-success");

      // Clear message after 3 seconds
      setTimeout(() => setMessage(""), 3000);

      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "OTP verification failed. Try again.";
      setMessage("❌ " + errorMessage);
      setMessageColor("text-danger");

      // Clear error message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "24rem" }}>
        <h2 className="text-center mb-3">Verify OTP</h2>

        {/* Success/Error Message ABOVE the form */}
        {message && (
          <p className={`text-center fw-bold ${messageColor}`}>{message}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter OTP"
              className="form-control"
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-center">
           
            <button type="submit" className="btn btn-success w-65">
           
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
