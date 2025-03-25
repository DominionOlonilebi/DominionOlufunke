import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) {
          errorMsg = `${
            name === "firstName" ? "First" : "Last"
          } Name is required. `;
        }
        break;

      case "email":
        if (!value.trim()) {
          errorMsg = "Email is required.";
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            errorMsg = "Please enter a valid email address.";
          }
        }
        break;

      case "phone":
        if (value && !/^\+?\d{7,15}$/.test(value)) {
          errorMsg = "Enter a valid phone number (7-15 digits).";
        }
        break;

      case "message":
        if (!value.trim()) {
          errorMsg = "Message is required.";
        }
        break;

      default:
        break;
    }

    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const errorMsg = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      toast.error("Please fill the form correctly. All fields are required.");
      return;
    }

    setLoading(true); // Show spinner

    try {
      const res = await axios.post(
        "https://dm-tech-bk.onrender.com/api/send-email",
        formData
      );
      if (res.data.success) {
        toast.success("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while sending your message.");
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "0px 5px 15px rgba(63, 63, 63, 0.2)",
        }}
      />
      <section id="contact" className="mt-5">
        <div className="container contact text-center">
          <div className="row">
            <div className="col">
              <h5 className="mb-3" style={{ fontSize: "27px" }}>
                Contact Me
              </h5>
              <div className="text-white">
                <p>
                  <MdMail className="mx-1" />
                  dominionolufunke27@gmail.com
                </p>
                <p className="contact-phone">
                  <FaPhoneAlt className="mx-1" />
                  +234 705-216-9039{" "}
                  <span className="mx-3">
                    <FaPhoneAlt className="mx-1" />
                    +234 810-816-7305
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 bg-transparent">
        <div className="mx-auto col-md-8 col-lg-6">
          <h2 className="text-center mb-3 text-white">Send a message</h2>
          <hr
            className="w-25 mx-auto border-3"
            style={{ color: "#e7008a" }}
          />

          <form
            onSubmit={handleSubmit}
            className="card card-body"
            style={{ background: "#111111" }}
          >
            <div className="row">
              <div className="col px-1 mb-3">
                <label
                  for="input1"
                  className="ms-2 position-absolute"
                  style={{
                    marginTop: "-0.75rem !important",
                    background: "#111111",
                  }}
                >
                  <span
                    className=" small  px-1"
                    style={{ background: "#111111", color: "#e7008a" }}
                  >
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  className={`form-control mt-2  text-white ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder=" "
                  id="input1"
                  style={{
                    fontSize: "13px",
                    padding: "12px",
                    background: "#111111",
                  }}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>

              <div className="col px-1 mb-3">
                <label
                  for="input2"
                  className="ms-2 position-absolute"
                  style={{
                    marginTop: "-0.75rem !important",
                    background: "#111111",
                  }}
                >
                  <span
                    className=" small  px-1"
                    style={{ background: "#111111", color: "#e7008a" }}
                  >
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  className={`form-control mt-2  text-white ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder=" "
                  id="input2"
                  style={{
                    fontSize: "13px",
                    padding: "12px",
                    background: "#111111",
                  }}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col px-1 mb-3">
                <label
                  for="input3"
                  className="ms-2 position-absolute"
                  style={{
                    marginTop: "-0.75rem !important",
                    background: "#111111",
                  }}
                >
                  <span
                    className=" small  px-1"
                    style={{ background: "#111111", color: "#e7008a" }}
                  >
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  className={`form-control mt-2  text-white ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  id="input3"
                  style={{
                    fontSize: "13px",
                    padding: "12px",
                    background: "#111111",
                  }}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col px-1 mb-3">
                <label
                  for="input4"
                  className="ms-2 position-absolute"
                  style={{
                    marginTop: "-0.75rem !important",
                    background: "#111111",
                  }}
                >
                  <span
                    className=" small  px-1"
                    style={{ background: "#111111", color: "#e7008a" }}
                  >
                    Phone Number
                  </span>
                </label>
                <input
                  type="tel"
                  className={`form-control mt-2  text-white 
                    ${errors.phone ? "is-invalid" : ""}`}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  id="input4"
                  style={{
                    fontSize: "13px",
                    padding: "12px",
                    background: "#111111",
                  }}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col px-1 mb-2">
                <label
                  for="input5"
                  className="ms-2 position-absolute"
                  style={{
                    marginTop: "-0.75rem !important",
                    background: "#111111",
                  }}
                >
                  <span
                    className=" small  px-1"
                    style={{ background: "#111111", color: "#e7008a" }}
                  >
                    Your Message
                  </span>
                </label>
                <textarea
                  type="text"
                  className={`form-control mt-2  text-white ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  id="input5"
                  style={{
                    fontSize: "13px",
                    padding: "12px",
                    background: "#111111",
                    height: "150px",
                  }}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}

                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-pink w-100  py-3"
                    disabled={loading}
                    style={{
                      backgroundColor: "#e7008a",
                      color: "white",
                      border: "none",
                    }}
                  >
                    {loading ? (
                      <div
                        className="spinner-border spinner-border-sm text-light"
                        role="status"
                        style={{
                          backgroundColor: "#e7008a",
                          color: "white",
                        }}
                      >
                        <span className="visually-hidden">Submitting...</span>
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
