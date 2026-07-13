import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  ShieldCheck,
  Users,
  Truck,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useAlert } from "../components/Alert";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_CONTACT_TEMPLATE,
  EMAILJS_PUBLIC_KEY,
  ADMIN_EMAIL,
} from "../config";
import "./ContactUs.css";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const showAlert = useAlert();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. USER ko thank-you mail
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE,
        {
          to_email: form.email,
          subject: "Thank you for contacting Govind Traders!",
          heading: `Hi ${form.name},`,
          intro:
            "Thank you for reaching out to Govind Traders! We have received your message and our team will get back to you shortly.",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      // 2. ADMIN ko notification mail
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE,
        {
          to_email: ADMIN_EMAIL,
          subject: "🔔 New Contact Message Received",
          heading: "New Contact Us Submission",
          intro: "A new message has been submitted via the Contact Us form:",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      showAlert("Message sent! Hum jaldi hi aapse contact karenge.", "success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      showAlert("Kuch gadbad hui, dobara try karo.", "error");
    }
  };

  return (
    <section className="contact-page">
      <h2 className="page-title">
        <span className="text-yellow">— </span>CONTACT US
        <span className="text-yellow"> —</span>
      </h2>

      <div className="contact-grid">
        {/* CONTACT INFO */}
        <div className="contact-info">
          <div className="info-card">
            <MapPin size={20} className="text-yellow" />
            <div>
              <h4>Our Address</h4>
              <p>Kamtaul, Ahiyari, Darbhanga 847304, Bihar</p>
            </div>
          </div>
          <div className="info-card">
            <Phone size={20} className="text-yellow" />
            <div>
              <h4>Call Us</h4>
              <p>9471053015</p>
            </div>
          </div>
          <div className="info-card">
            <Mail size={20} className="text-yellow" />
            <div>
              <h4>Email Us</h4>
              <p>govindtraders690@gmail.com</p>
            </div>
          </div>
          <div className="info-card">
            <Clock size={20} className="text-yellow" />
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* MAP */}
          <div className="map-wrapper">
            
              <a href="https://www.google.com/maps/search/?api=1&query=Kamtaul,+Ahiyari,+Darbhanga,+Bihar+847304"
              target="_blank"
              rel="noopener noreferrer"
              className="open-in-maps"
            >
              Open in Maps ↗
            </a>
            <iframe
              title="Govind Traders Location"
              className="contact-map"
              src="https://www.google.com/maps?q=Kamtaul,+Ahiyari,+Darbhanga,+Bihar+847304&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* CONTACT FORM + WHY CHOOSE US */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>

          {/* WHY CHOOSE US */}
          <div className="why-choose-us">
            <h3>
              Why Choose <span className="text-yellow">Govind Traders?</span>
            </h3>
            <p className="why-subtitle">
              8+ saal se Darbhanga aur aas-paas ke market me hum apni quality
              aur trust ke liye jaane jaate hain.
            </p>
            <div className="why-grid">
              <div className="why-card">
                <Award size={22} className="text-yellow" />
                <div>
                  <h4>8+ Years Experience</h4>
                  <p>Market me lambe samay se bharosemand seva</p>
                </div>
              </div>
              <div className="why-card">
                <ShieldCheck size={22} className="text-yellow" />
                <div>
                  <h4>Quality Assured</h4>
                  <p>Sirf badhiya aur genuine quality ka saman</p>
                </div>
              </div>
              <div className="why-card">
                <Users size={22} className="text-yellow" />
                <div>
                  <h4>Trusted by Customers</h4>
                  <p>Acha naam aur satisfied customer base</p>
                </div>
              </div>
              <div className="why-card">
                <Truck size={22} className="text-yellow" />
                <div>
                  <h4>Timely Delivery</h4>
                  <p>Order time par pahuchane ki guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
