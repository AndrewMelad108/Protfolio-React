import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <div className="title-info flex">
        <span className="icon-envelope"></span>
        <h1 className="title">Contact Us</h1>
      </div>
      <p className="sub-title">
        Contact us more information and Get notified when i publish something
        new .
      </p>
      <div className="flex contact-content">
        <div className="contact-form">
          <label htmlFor="Email">Email Address:</label>
          <input type="email" />
          <label htmlFor="Email">Your message:</label>
          <textarea name="message" id="message"></textarea>
          <button className="contact-btn">submit</button>
        </div>
        <div className="contact-image">image</div>
      </div>
    </div>
  );
}
