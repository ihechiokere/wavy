import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <div
        className={`modal-container modal-bright ${
          modalOpen ? "full-modal-container" : ""
        }`}
      >
        <ul
          className={`modal-content ${modalOpen ? "full-modal-content" : ""}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/creators">Wassapviews Creators</Link>
          </li>
          <li>
            <Link to="/downloads">Downloads</Link>
          </li>
          <li>
            <Link to="/help">Help Center/Guide</Link>
          </li>
          <li>
            <Link to="/howto">How to Install the VCF File</Link>
          </li>
          <li>
            <Link to="/TOS">Terms of Service</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>          
        </ul>
      </div>
    </>
  );
};

export default NavBar;