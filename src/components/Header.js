import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from './AuthContext'; // ✅ Import global state
import logo from "../assets/logo.png";

const Header = () => {
  const { user, setUser, loadUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-3" style={{ backgroundColor: "#fff9e6" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="50" height="50" />
        </Link>
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

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/" aria-current="page">
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-dark" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: "#fff3cd", border: "1px solid #ffeeba", borderRadius: "5px" }}>
                <li>
                  <Link className="dropdown-item text-dark" to="/ac-repair">
                    AC Repair
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-dark" to="/washing-machine-repair">
                    Washing Machine Repair
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-dark" to="/water-purifier">
                    Water Purifier
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-dark" to="/all-services">
                    All Services
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          </div> 

        <div className="ms-auto d-flex align-items-center">
          {user ? (
            <>
              {/* User Icon Navigates to /user-menu */}
              <button className="btn d-flex align-items-center text-dark border-0" onClick={() => navigate("/user-menu")}>
                <FaUserCircle size={28} className="me-2" />
                <span className="fw-bold">{user.name || "User"}</span>
              </button>
              <button className="btn btn-danger ms-3" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-primary me-2 px-3 rounded-pill" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary px-3 rounded-pill" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
