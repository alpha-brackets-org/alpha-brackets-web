import React, { useState } from "react";
import Head from "next/head";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setSubmitMessage(
          `Sorry, there was an error: ${errorData.error || "Please try again."}`
        );
      }
    } catch (error) {
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/admin.css" />
      </Head>

      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 valign">
              <div className="sec-head info-box full-width md-mb80">
                <div className="phone fz-30 fw-600 underline main-color">
                  <a href="#0">+1 840 841 25 69</a>
                </div>
                <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                  <h6 className="mb-15">Address</h6>
                  <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
                </div>
                <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                  <h6 className="mb-15">Email</h6>
                  <p>Support@UiCamp.com</p>
                </div>

                <div className="social-icon mt-50">
                  <a href="#0">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0">
                    <i className="fab fa-dribbble"></i>
                  </a>
                  <a href="#0">
                    <i className="fab fa-behance"></i>
                  </a>
                  <a href="#0">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 valign">
              <div className="full-width">
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-15">
                    Let&lsquo;s Chat
                  </h6>
                  <h3 className="text-u ls1">
                    Send a <span className="fw-200">message</span>
                  </h3>
                </div>
                <form
                  id="contact-form"
                  className="form2"
                  onSubmit={handleSubmit}
                >
                  <div className="messages">
                    {submitMessage && (
                      <div
                        className={`alert ${
                          submitMessage.includes("Thank you")
                            ? "alert-success"
                            : "alert-danger"
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}
                  </div>

                  <div className="controls row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required="required"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required="required"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-30">
                        <input
                          id="form_subject"
                          type="text"
                          name="phone"
                          placeholder="Phone (Optional)"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                          required="required"
                        ></textarea>
                      </div>
                      <div className="mt-30">
                        <button
                          type="submit"
                          className="butn butn-full butn-bord radius-30"
                          disabled={isSubmitting}
                        >
                          <span className="text">
                            {isSubmitting ? "Sending..." : "Let's Talk"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
