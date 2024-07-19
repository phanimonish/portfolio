import React from "react";
import "./Footer.css";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="footer-side-1">
          <h1 className="footer-head">KPM-DevWorks</h1>
          <p className="footer-subhead">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <p className="footer-subhead-2">Get in touch</p>
          <div className="footer-connect">
            <input
              placeholder="Enter your e-mail address"
              className="footer-input"
            />
            <button className="footer-send-btn">
              <SendIcon />
            </button>
          </div>
        </div>
        <div className="footer-side-2">
          <h2 className="footer-subhead-3">Pages</h2>
          <ul className="footer-list">
            <li className="footer-list-item">Home</li>
            <li className="footer-list-item">Contact</li>
            <li className="footer-list-item">Services</li>
            <li className="footer-list-item">My Work</li>
          </ul>
        </div>
        <div className="footer-side-3">
          <h2 className="footer-subhead-3">Social Media</h2>
          <ul className="footer-list">
            <li className="footer-list-item">Facebook</li>
            <li className="footer-list-item">Linkedin</li>
            <li className="footer-list-item">Instagram</li>
          </ul>

          <h2 className="footer-subhead-3">Resources</h2>
          <ul className="footer-list">
            <li className="footer-list-item">Help & Support</li>
            <li className="footer-list-item">Contact</li>
          </ul>
        </div>
      </div>
      <div className="copyright-text">
        <p className="footer-subhead">
          Copyright 2024 @ K.P.Monish, All rights reserved!
        </p>
      </div>
    </div>
  );
}
