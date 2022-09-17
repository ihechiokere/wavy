import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <div className="footer mt400">
        <p>Follow and contact us</p>
        <section className="social-icons">
          <button className="icon-btn ins">
            <FaInstagram className="contact-icon" />
          </button>
          <button className="icon-btn twi">
            <FaTwitter className="contact-icon" />
          </button>
          <button className="icon-btn fac">
            <FaFacebook className="contact-icon" />
          </button>
          <button className="icon-btn mai">
            <HiOutlineMail className="contact-icon" />
          </button>
        </section>
        <p>
          Disclaimer: All transactions carried out involving any WV contact is
          at your discretion.
        </p>
        <p>Be Wise!</p>
        <p>© Copyright 2022 Wassapviews - Get more whatsapp views</p>
      </div>
    </>
  );
};

export default Footer;
