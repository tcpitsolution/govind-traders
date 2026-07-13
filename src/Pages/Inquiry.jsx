import React, { useState, useEffect, useRef } from "react";
import bgVideo from "../assets/video/background video.mp4";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useAlert } from "../components/Alert";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_INQUIRY_TEMPLATE,
  EMAILJS_PUBLIC_KEY,
  ADMIN_EMAIL,
} from "../config";
import "./Inquiry.css";

/*
  ================= IMAGE / VIDEO PLACEHOLDER GUIDE =================
  BG_VIDEO -> Hero section ka background video (chalta hua/looping)
  Bas <source src="BG_VIDEO"> ki jagah apni video file ka path daal dena
  (jaise /videos/construction.mp4), baaki kuch change mat karna.
  =====================================================================
*/

// Dropdown options: Products section + Rental Tools section (sirf category names)
const inquiryOptions = [
  {
    group: "Products",
    options: [
      "Cement",
      "Saria",
      "Bajri",
      "Reta",
      "Paints",
      "Hardware",
      "Sanitary",
    ],
  },
  {
    group: "Rental Tools",
    options: [
      "Hand Tools",
      "Power Tools",
      "Heavy Machines",
      "Measuring & Layout Tools",
      "Safety Equipment",
      "Miscellaneous",
    ],
  },
];

// Stats to show in the counter section
const stats = [
  { target: 10000, suffix: "+", label: "Happy Customers" },
  { target: 15, suffix: "+", label: "Years of Experience" },
  { target: 2500, suffix: "+", label: "Products Delivered" },
  { target: 100, suffix: "+", label: "Tools Available for Rent" },
];

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const start = () => {
    if (started.current) return;
    started.current = true;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return [count, start];
}

function StatCounter({ target, suffix, label }) {
  const [count, start] = useCountUp(target);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) start();
        });
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="counter-box" ref={ref}>
      <span className="counter-number">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="counter-label">{label}</span>
    </div>
  );
}

export default function Inquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    address: "",
    message: "",
  });

  const showAlert = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. USER ko thank-you mail
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_INQUIRY_TEMPLATE,
        {
          to_email: form.email,
          subject: "Thank you for your Inquiry - Govind Traders",
          heading: `Hi ${form.name},`,
          intro:
            "Thank you for your inquiry with Govind Traders! We have received your request and our team will get back to you shortly.",
          name: form.name,
          email: form.email,
          phone: form.phone,
          product: form.category,
          address: form.address,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      // 2. ADMIN ko notification mail
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_INQUIRY_TEMPLATE,
        {
          to_email: ADMIN_EMAIL,
          subject: "🔔 New Inquiry Received",
          heading: "New Inquiry Submission",
          intro:
            "A new inquiry has been submitted on the Govind Traders website:",
          name: form.name,
          email: form.email,
          phone: form.phone,
          product: form.category,
          address: form.address,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      showAlert("Inquiry sent! Hum jaldi hi aapse contact karenge.", "success");
      setForm({
        name: "",
        email: "",
        phone: "",
        category: "",
        address: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
      showAlert("Kuch gadbad hui, dobara try karo.", "error");
    }
  };

  return (
    <div className="inquiry-page">
      {/* ===== SECTION 1: VIDEO HERO ===== */}
      <section className="video-hero">
        {/* BG_VIDEO */}
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="video-overlay" />

        <div className="video-hero-content">
          <h1>Kisi bhi Product ya Service Inquiry ke liye</h1>
          <h1 className="text-yellow">Inquiry Form Bhare</h1>
        </div>
      </section>

      {/* ===== SECTION 2: STATS COUNTER ===== */}
      <section className="counter-section">
        <div className="counter-grid">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* ===== SECTION 3: TEXT + FORM ===== */}
      <section className="text-form-section">
        <div className="text-side">
          <span className="text-tagline">
            Aapka Bharosemand Building Material Partner
          </span>
          <h2>
            Hamare yaha milta hai{" "}
            <span className="text-yellow">har zaroorat ka saman</span> — ek hi
            chhat ke neeche
          </h2>
          <p>
            Cement, Saria, Bajri, Reta, Paints, Hardware ya Rental Tools — chahe
            chhota ho ya bada, har building construction ka saman aapko genuine
            quality aur best price par milega. Aapko bas ek call ya inquiry
            karni hai, baaki hum sambhal lenge.
          </p>

          <div className="feature-points">
            <div className="feature-point">
              <span className="dot" />
              100% Genuine & Trusted Brands
            </div>
            <div className="feature-point">
              <span className="dot" />
              Home Delivery Available
            </div>
            <div className="feature-point">
              <span className="dot" />
              Best Market Price Guarantee
            </div>
          </div>
        </div>

        <div className="form-side">
          <form className="inquiry-form" onSubmit={handleSubmit}>
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
              required
            />
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Product / Rental Tool</option>
              {inquiryOptions.map((group) => (
                <optgroup key={group.group} label={group.group}>
                  {group.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
            <button type="submit" className="submit-btn">
              SEND INQUIRY <Send size={16} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
