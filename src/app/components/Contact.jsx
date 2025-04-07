"use client";
import React, { useState } from "react";

const Contact = () => {
  const [checkbox, setCheckbox] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    wantToReceiveMessages: false,
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const checkHandler = (e) => {
    const { value } = e.target;
    const index = checkbox.indexOf(value);
    if (index === -1) {
      setCheckbox([...checkbox, value]);
    } else {
      setCheckbox(checkbox.filter((v) => v !== value));
    }
  };

  const handleSubmit = async (e) => {
    setSubmit(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("phone", data.phone);
    formData.append("service", checkbox.join(","));
    formData.append("wantToReceiveMessages", data.wantToReceiveMessages);
    formData.append("acceptedTerms", data.acceptedTerms);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const resData = await response.json();

    if (resData.success) {
      alert("Email sent successfully!");
      setSubmit(false);
      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
        wantToReceiveMessages: false,
        acceptedTerms: false,
      });
      setCheckbox([]);
    } else {
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="field-container">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="field-container">
          <label htmlFor="email">
            Email<span>*</span>
          </label>

          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="field-container">
          <label htmlFor="phone">
            Phone<span>*</span>
          </label>

          <input
            type="text"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </div>

        <div className="py-3">
          <div className="check-container">
            <input
              type="checkbox"
              checked={checkbox.includes("aquisition")}
              value="aquisition"
              id="aquisition"
              className="custom-checkbox"
              onChange={checkHandler}
            />
            <label htmlFor="aquisition" className="check-label">
              Acuisition
            </label>
          </div>

          <div className="check-container">
            <input
              type="checkbox"
              checked={checkbox.includes("awareness")}
              id="awareness"
              className="custom-checkbox"
              value="awareness"
              onChange={checkHandler}
            />
            <label htmlFor="awareness" className="check-label">
              Awareness
            </label>
          </div>

          <div className="check-container">
            <input
              type="checkbox"
              id="brand-loyality"
              className="custom-checkbox"
              value="brand-loyality"
              checked={checkbox.includes("brand-loyality")}
              onChange={checkHandler}
            />
            <label htmlFor="brand-loyality" className="check-label">
              Brand Loyalty
            </label>
          </div>

          <div className="check-container">
            <input
              type="checkbox"
              id="management"
              className="custom-checkbox"
              value="management"
              checked={checkbox.includes("management")}
              onChange={checkHandler}
            />
            <label htmlFor="management" className="check-label">
              Management
            </label>
          </div>

          <div className="check-container">
            <input
              type="checkbox"
              id="other"
              className="custom-checkbox"
              value="other"
              checked={checkbox.includes("other")}
              onChange={checkHandler}
            />
            <label htmlFor="other" className="check-label">
              Other
            </label>
          </div>
        </div>

        <div className="field-container">
          <label htmlFor="message">
            Message<span>*</span>
          </label>

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={data.message}
            onChange={handleChange}></textarea>
        </div>

        <div className="check-container check-container-message">
          <input
            type="checkbox"
            id="wantToReceiveMessages"
            className="custom-checkbox"
            value="wantToReceiveMessages"
            checked={data.wantToReceiveMessages}
            onChange={() =>
              setData({
                ...data,
                wantToReceiveMessages: !data.wantToReceiveMessages,
              })
            }
          />
          <label htmlFor="wantToReceiveMessages" className="check-label">
            I authorize limitless-marketin to process my personal information in
            order to send me the emails.
          </label>
        </div>
        <div className="check-container check-container-message">
          <input
            type="checkbox"
            id="acceptedTerms"
            className="custom-checkbox"
            value="acceptedTerms"
            checked={data.acceptedTerms}
            onChange={() =>
              setData({
                ...data,
                acceptedTerms: !data.acceptedTerms,
              })
            }
          />
          <label htmlFor="acceptedTerms" className="check-label">
            I accept the terms and conditions
          </label>
        </div>

        <div className="field-container">
          <button type="submi" className="submit-btn">
            {submit ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
