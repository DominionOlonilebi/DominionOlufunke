import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateField = (name, value) => {
    let errorMsg = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          errorMsg = `${name === 'firstName' ? 'First' : 'Last'} Name is required.`;
        }
        break;

      case 'email':
        if (!value.trim()) {
          errorMsg = 'Email is required.';
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            errorMsg = 'Please enter a valid email address.';
          }
        }
        break;

      case 'phone':
        if (value && !/^\+?\d{7,15}$/.test(value)) {
          errorMsg = 'Enter a valid phone number (7-15 digits).';
        }
        break;

      case 'message':
        if (!value.trim()) {
          errorMsg = 'Message is required.';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const isValid = validateForm();
    if (!isValid) {
      setError('Please fill the form correctly. All field is required');
      return;
    }

    try {
      const res = await axios.post('https://dm-tech-bk.onrender.com/api/send-email', formData);
      if (res.data.success) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
        setErrors({});
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while sending your message.');
    }
  };

  return (
    <>
      <section id="contact" className='mt-5'>
        <div className="container contact text-center">
          <div className="row">
            <div className="col">
              <h5 className="mb-3" style={{ fontSize: "27px" }}>Contact Me</h5>
              <div
                data-aos="zoom-in"
                data-aos-duration="2500"
                className="text-white"
              >
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

      <div className="container mt-5">
        <div className="mx-auto col-md-8 col-lg-6">
          <h2 className="text-center mb-3 text-white">Send a message</h2>
          <hr className="w-25 mx-auto border-3" style={{ borderColor: "#ff0b9d", backgroundColor: "transparent" }} />

          <form onSubmit={handleSubmit} className="mt-4 position-relative">
            {error && <div className="alert alert-danger">{error}</div>}
            {success && (
              <div className="alert alert-success">
                Form submitted successfully!
              </div>
            )}

            {/* First & Last Name */}
            <div className="row mb-3">
              <div className="col position-relative">
                <div className="form-floating">
                  <input
                    type="text"
                    className={`form-control text-white bg-transparent ${errors.firstName ? 'is-invalid' : ''}`}
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  <label className="text-pink" style={{ color: "#e7008a", backgroundColor: "transparent" }}>First Name</label>
                  <AnimatePresence>
                    {errors.firstName && (
                      <motion.div
                        className="invalid-feedback d-block"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        {errors.firstName}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="col position-relative">
                <div className="form-floating">
                  <input
                    type="text"
                    className={`form-control text-white bg-transparent ${errors.lastName ? 'is-invalid' : ''}`}
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  <label className="text-pink" style={{ color: "#e7008a", backgroundColor: "transparent" }}>Last Name</label>
                  <AnimatePresence>
                    {errors.lastName && (
                      <motion.div
                        className="invalid-feedback d-block"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        {errors.lastName}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="form-floating mb-3 position-relative">
              <input
                type="email"
                className={`form-control text-white bg-transparent ${errors.email ? 'is-invalid' : ''}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
              <label className="text-pink" style={{ color: "#e7008a", backgroundColor: "transparent" }}>Email Address</label>
              <AnimatePresence>
                {errors.email && (
                  <motion.div
                    className="invalid-feedback d-block"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {errors.email}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone */}
            <div className="form-floating mb-3 position-relative">
              <input
                type="tel"
                className={`form-control text-white bg-transparent ${errors.phone ? 'is-invalid' : ''}`}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              <label className="text-pink" style={{ color: "#e7008a", backgroundColor: "transparent" }}>Phone Number</label>
              <AnimatePresence>
                {errors.phone && (
                  <motion.div
                    className="invalid-feedback d-block"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {errors.phone}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Message */}
            <div className="form-floating mb-3 position-relative">
              <textarea
                className={`form-control text-white bg-transparent ${errors.message ? 'is-invalid' : ''}`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                style={{ height: '150px' }}
              />
              <label className="text-pink" style={{ color: "#e7008a", backgroundColor: "transparent" }}>Your Message</label>
              <AnimatePresence>
                {errors.message && (
                  <motion.div
                    className="invalid-feedback d-block"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {errors.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              className="btn btn-pink py-3 w-100"
              style={{
                backgroundColor: "#e7008a",
                color: "white",
                border: "none"
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
