import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box">
        <div className="left">
          <div className="categories">
            <p>Categories</p>
            <div>
              <p>Personal Finance</p>
            </div>
            <div>
              <p>Investment</p>
            </div>
            <div>
              <p>Trackers</p>
            </div>
          </div>
          <div className="contactUs">
            <div className="contact">
              <p>Contact Us</p>
              <div>
                Phone No. - <span>987XXXXXXX</span>
              </div>
              <div>
                Email - <span>finova@xxx.com</span>
              </div>
              <div>
                Address - <span>New Delhi, India</span>
              </div>
            </div>
            <div className="icon">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="newsletter">
            <p>Subscribe to Our Newsletter</p>
            <div className="email">
              <input type="email" placeholder="Enter Your Email Here" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        Copyrights &copy; 2025 FiNova
      </div>
    </div>
  );
};

export default Footer;
