import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserCircle, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";

const UserMenu = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState("profile");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem("userId"); // Fetch userId instead of token
            if (!userId) {
                navigate("/login");
                return;
            }
            try {
                const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Failed to fetch user data", error);
                navigate("/login");
            }
        };

        fetchUserData();
    }, [navigate]);

    // ✅ Define logout function inside UserMenu
    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
        window.location.reload(); // ✅ Ensure UI updates after logout
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Sidebar - Left */}
                <div className="col-md-3 bg-light p-3 rounded shadow-sm">
                    <div className="d-flex flex-column align-items-center text-center">
                        <FaUserCircle size={50} className="text-secondary mb-2" />
                        <h5 className="fw-bold">{user?.name || "Guest"}</h5>
                        <span className="text-muted">{user?.email}</span>
                    </div>

                    <hr />

                    {/* Navigation Buttons */}
                    <button
                        className={`btn w-100 text-start ${activeSection === "profile" ? "btn-primary" : "btn-light"} my-2`}
                        onClick={() => setActiveSection("profile")}
                    >
                        <FaUserCircle className="me-2" /> Profile
                    </button>
                    <button
                        className={`btn w-100 text-start ${activeSection === "orders" ? "btn-primary" : "btn-light"} my-2`}
                        onClick={() => setActiveSection("orders")}
                    >
                        <FaShoppingBag className="me-2" /> Orders
                    </button>
                    <button className="btn w-100 text-danger text-start my-2" onClick={handleLogout}>
                        <FaSignOutAlt className="me-2" /> Logout
                    </button>
                </div>

                {/* Content Section - Right */}
                <div className="col-md-9">
                    {activeSection === "profile" && (
                        <div className="card p-4 shadow-sm">
                            <h3>Profile</h3>
                            <p>Name: {user?.name || "Guest"}</p>
                            <p>Email: {user?.email}</p>
                        </div>
                    )}

                    {activeSection === "orders" && (
                        <div className="card p-4 shadow-sm">
                            <h3>Orders</h3>
                            <p>Order history will be displayed here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserMenu;
