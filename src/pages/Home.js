import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Replace with your logo path

const Home = () => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim() === "") {
      alert("Please enter a location.");
      return;
    }
    alert(`Searching services in: ${location}`);
    // You can navigate to a location-based services page here
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-3"
      style={{ backgroundColor: "#fff9e6" }} >
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="50" height="50" />
          </Link>

          {/* Toggle Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page">
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{
                    backgroundColor: "#fff3cd",
                    border: "1px solid #ffeeba",
                    borderRadius: "5px",
                  }}
                >
                  <li>
                    <Link className="dropdown-item text-dark" to="/ac-repair">
                      AC Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      to="/washing-machine-repair"
                    >
                      Washing Machine Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      to="/water-purifier"
                    >
                      Water Purifier
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      to="/all-services"
                    >
                      All Services
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Centered Search Bar */}
            <form
              className="d-flex mx-auto"
              onSubmit={handleSearch}
              style={{ width: "40%" }}
            >
              <input
                type="text"
                className="form-control form-control-sm me-2"
                placeholder="Search home services by location..."
                value={location}
                onChange={handleLocationChange}
              />
              <button
                className="btn btn-sm"
                type="submit"
                style={{
                  border: "1px solid black", // Black border
                  color: "black", // Ensuring text is visible
                  backgroundColor: "transparent", // Keeping it outlined
                }}
              >
                Search
              </button>
            </form>

            {/* Login & Register Buttons (Styled) */}
            <div className="ms-auto d-flex">
              <Link
                className="btn me-2 px-3 rounded-pill"
                to="/login"
                style={{
                  backgroundColor: "#007bff", // Soft Blue
                  border: "1px solid black",
                  color: "white", // White text for contrast
                }}
              >
                Login
              </Link>
              <Link
                className="btn btn-primary px-3 rounded-pill"
                to="/register"
                style={{
                  backgroundColor: "#007bff", // Soft Blue
                  border: "1px solid black",
                  color: "white", // White text for contrast
                }}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container my-5">
        <h1>Welcome to Urbane Services</h1>
        <p>
          We offer a wide range of services to cater to your needs. Explore our
          services below:
        </p>
      </div>
    </div>
  );
};

export default Home;
