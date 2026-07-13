import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Header.css";
import logo from "../assets/images/logo.png";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../config";

/*
  IMAGE PLACEHOLDER:
  LOGO_IMG -> Header logo (ghar/house icon wala)
*/

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>
              <MapPin size={14} className="icon-yellow" />
              Kamtaul , Ahiyari , Darbhanga 847304 , Bihar
            </span>
            <span>
              <Phone size={14} className="icon-yellow" />
              9471053015
            </span>
            <span>
              <Mail size={14} className="icon-yellow" />
              govindtraders690@gmail.com
            </span>
          </div>
          <div className="topbar-right">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="brand">
            {/* LOGO_IMG */}
            <img src={logo} alt="Govind Traders Logo" className="brand-logo" />
            <div>
              <h1 className="brand-title">GOVIND TRADERS</h1>
              <p className="brand-subtitle">BUILDING YOUR DREAMS</p>
            </div>
          </div>

          <nav className="nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
            <NavLink
              to="/rental-tools"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Rental Tools
            </NavLink>
            <NavLink
              to="/inquiry"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inquiry
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Us
            </NavLink>
          </nav>

          <button
            className="btn btn-yellow call-now-btn"
            onClick={() => navigate("/contact-us")}
          >
            <Phone size={16} /> Call Now
          </button>
        </div>
      </header>
    </>
  );
}
