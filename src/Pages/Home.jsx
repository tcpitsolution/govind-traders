import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/images/background.png";
import cement from "../assets/images/cement.png";
import tmt from "../assets/images/tmt.png";
import bajri from "../assets/images/bajri.png";
import reta from "../assets/images/reta.png";
import paints from "../assets/images/paints.png";
import hardware from "../assets/images/hardware.png";
import tools from "../assets/images/tools.png";
import sanatry from "../assets/images/sanatry.png";
import ultratech from "../assets/images/ultratech.png";
import acc from "../assets/images/acc.png";
import kamdhenu from "../assets/images/kamdhenu.png";
import jkcement from "../assets/images/jkcement.png";
import asian from "../assets/images/asian.png";
import berger from "../assets/images/berger.png";
import rohit from "../assets/images/rohit.png";
import sunita from "../assets/images/sunita.png";
import vikram from "../assets/images/vikram.png";
import {
  Truck,
  BadgeIndianRupee,
  BadgeCheck,
  Wrench,
  Headset,
  Phone,
  FileText,
  TrendingUp,
} from "lucide-react";
import "./Home.css";

const categoryImages = [
  cement,
  tmt,
  bajri,
  reta,
  paints,
  hardware,
  tools,
  sanatry,
];

const categories = [
  "Cement",
  "Saria",
  "Bajri",
  "Reta",
  "Paints",
  "Hardware",
  "Rental Tools",
  "Sanitary",
];

const featuredProducts = [
  { name: "UltraTech Cement", desc: "Premium Quality Cement", img: ultratech },
  { name: "ACC Cement", desc: "High Strength Cement", img: acc },
  { name: "Kamdhenu Saria", desc: "TMT Steel Bars", img: kamdhenu },
  { name: "JK Cement", desc: "Trusted & Durable", img: jkcement },
  { name: "Asian Paints", desc: "Beautiful Home Paints", img: asian },
  { name: "Berger Paints", desc: "Long Lasting Colors", img: berger },
];

const whyChooseUs = [
  {
    icon: Truck,
    title: "HOME DELIVERY",
    desc: "Fast & Safe Delivery at your site",
  },
  {
    icon: BadgeIndianRupee,
    title: "BEST PRICE",
    desc: "Competitive Price Guaranteed",
  },
  {
    icon: BadgeCheck,
    title: "GENUINE PRODUCTS",
    desc: "100% Original Trusted Brands",
  },
  {
    icon: Wrench,
    title: "TOOL RENTAL",
    desc: "Quality Tools Available on Rent",
  },
  { icon: Headset, title: "FAST SUPPORT", desc: "24/7 Customer Support" },
  {
    icon: TrendingUp,
    title: "HIGH MARKET VALUE",
    desc: "Trusted Brand with Strong Market Presence",
  },
];

const testimonials = [
  {
    name: "Rohit Kumar",
    place: "india",
    review:
      "Very good service and timely delivery. Product quality is excellent.",
    avatar: rohit,
  },
  {
    name: "Sunita Devi",
    place: "india",
    review: "Best prices in the market. Staff is also very cooperative.",
    avatar: sunita,
  },
  {
    name: "Vikram Singh",
    place: "india",
    review: "I rented a concrete mixer. Machine was in good condition.",
    avatar: vikram,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        {/* HERO_BG_IMG */}
        <img
          src={background}
          alt="Construction Site Background"
          className="hero-bg"
        />
        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-text">
            <h2>
              <span className="text-yellow">BUILDING MATERIAL</span>
              <br />
              KA EK HI THIKANA
            </h2>
            <p>
              Cement, Saria, Bajri, Reta, Paints, Hardware aur Rental Tools –
              Sab Kuch Ek Jagah
            </p>
            <div className="hero-buttons">
              <Link to="/inquiry" className="btn btn-yellow">
                <FileText size={16} /> Get Quote
              </Link>
              <Link to="/contact-us" className="btn btn-outline-white">
                <Phone size={16} /> Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="section">
        <h3 className="section-title">
          <span className="text-yellow">— </span>POPULAR CATEGORIES
          <span className="text-yellow"> —</span>
        </h3>

        <div className="category-grid">
          {categories.map((cat, i) => (
            <div key={cat} className="category-card">
              {/* CATEGORY_IMG_{i+1} */}
              <img src={categoryImages[i]} alt={cat} />
              <span>{cat}</span>
            </div>
          ))}
        </div>

        <div className="center-btn">
          <Link to="/products" className="btn btn-outline-yellow">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section">
        <h3 className="section-title">
          <span className="text-yellow">— </span>FEATURED PRODUCTS
          <span className="text-yellow"> —</span>
        </h3>

        <div className="home-product-grid">
          {featuredProducts.map((p, i) => (
            <div key={p.name} className="home-product-card">
              <img src={p.img} alt={p.name} />
              <span className="home-product-name">{p.name}</span>
              <span className="home-product-desc">{p.desc}</span>
              <Link to="/products" className="btn btn-outline-yellow">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-choose-us">
        <h3 className="section-title">
          <span className="text-yellow">— </span>WHY CHOOSE US
          <span className="text-yellow"> —</span>
        </h3>

        <div className="why-grid">
          {whyChooseUs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="why-card">
              <Icon size={32} className="text-yellow" />
              <span className="why-title">{title}</span>
              <span className="why-desc">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h3 className="section-title">
          <span className="text-yellow">— </span>WHAT OUR CUSTOMERS SAY
          <span className="text-yellow"> —</span>
        </h3>

        <div className="testimonial-grid">
          {testimonials.map((rev, i) => (
            <div key={rev.name} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>{rev.review}</p>
              <img src={rev.avatar} alt={rev.name} className="avatar" />
              <span className="testimonial-name">{rev.name}</span>
              <span className="testimonial-place">{rev.place}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
