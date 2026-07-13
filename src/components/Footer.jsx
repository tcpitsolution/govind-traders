import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../config";
import "./Footer.css";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToProduct = (key) => {
    navigate("/products");
    setTimeout(() => {
      const el = document.querySelector(`[data-key="${key}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            {/* LOGO_IMG */}
            <img src={logo} alt="Govind Traders Logo" className="footer-logo" />
            <div>
              <h4>GOVIND TRADERS</h4>
              <p>BUILDING YOUR DREAMS</p>
            </div>
          </div>
          <p className="footer-desc">
            Aapke construction ka bharosemand saathi. Best quality building
            materials aur tools, best price ke saath.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={19} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={19} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={19} />
            </a>
          </div>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/rental-tools">Rental Tools</Link>
            </li>
            <li>
              <Link to="/inquiry">Inquiry</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>PRODUCTS</h4>
          <ul>
            <li onClick={() => scrollToProduct("cement")}>Cement</li>
            <li onClick={() => scrollToProduct("saria")}>Saria</li>
            <li onClick={() => scrollToProduct("bajri")}>Bajri</li>
            <li onClick={() => scrollToProduct("reta")}>Reta</li>
            <li onClick={() => scrollToProduct("paints")}>Paints</li>
            <li onClick={() => scrollToProduct("hardware")}>Hardware</li>
            <li onClick={() => scrollToProduct("sanitary")}>Sanitary</li>
          </ul>
        </div>

        <div>
          <h4>CONTACT US</h4>
          <ul>
            <li>
              <Phone size={14} /> 9471053015
            </li>
            <li>
              <Mail size={14} /> govindtraders690@gmail.com
            </li>
            <li>Mon - Sat: 8:00 AM - 8:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 Govind Traders. All Rights Reserved.</span>
        <span>Website Developed by TCP IT SOLUTION</span>
      </div>
    </footer>
  );
}
