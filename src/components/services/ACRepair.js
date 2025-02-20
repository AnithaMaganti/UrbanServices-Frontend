import React from "react";

// Corrected image paths
import acInstallationImage from "../../assets/ac-installation.jpg"; // Ensure the image is in the src/assets folder
import acRepairImage from "../../assets/ac-repair.jpg";
import acMaintenanceImage from "../../assets/ac-maintenance.jpg";

const ACRepair = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">AC Repair Services</h2>
      <p className="text-center mb-4">
        We provide expert AC repair services to ensure your air conditioning
        systems are running smoothly. Our team is experienced and offers
        reliable solutions.
      </p>

      <h3 className="text-center mb-4">Our Services Include:</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img
              src={acInstallationImage}
              className="card-img-top"
              alt="AC Installation"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">AC Installation and Setup</h5>
              <p className="card-text">
                Professional installation of your air conditioning system for
                optimal performance.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img
              src={acRepairImage}
              className="card-img-top"
              alt="AC Repair"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">AC Repair and Troubleshooting</h5>
              <p className="card-text">
                Fast and reliable repairs to get your AC running smoothly again.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img
              src={acMaintenanceImage}
              className="card-img-top"
              alt="AC Maintenance"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">AC Maintenance and Cleaning</h5>
              <p className="card-text">
                Keep your AC in top condition with our maintenance and cleaning
                services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>
          Contact us today to get a professional AC repair service at affordable
          prices!
        </p>
        <button className="btn btn-primary">Contact</button>
      </div>
    </div>
  );
};

export default ACRepair;
