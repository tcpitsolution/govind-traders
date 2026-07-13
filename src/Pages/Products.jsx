import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

/*
  ================= IMAGE PLACEHOLDER GUIDE =================
  Har product card ke `src` me uska naam hai jaise
  PRODUCT_IMG_cement_1, PRODUCT_IMG_saria_1, etc.
  Bas apni image us placeholder ki jagah daal do.
  =============================================================
*/

const productCategories = [
  {
    key: "cement",
    title: "CEMENT",
    items: [
      {
        name: "UltraTech Cement",
        desc: "Premium Quality Cement",
        img: "ultratech.png",
      },
      { name: "ACC Cement", desc: "High Strength Cement", img: "acc.png" },
      { name: "JK Cement", desc: "Trusted & Durable", img: "jkcement.png" },
      {
        name: "Ambuja Cement",
        desc: "Superior Bonding Strength",
        img: "ambuja cement.png",
      },
    ],
  },
  {
    key: "saria",
    title: "SARIA (TMT STEEL BARS)",
    items: [
      { name: "Kamdhenu Saria", desc: "TMT Steel Bars", img: "kamdhenu.png" },
      {
        name: "Tata Tiscon",
        desc: "High Tensile Strength",
        img: "tata tiscon.png",
      },
      { name: "SAIL TMT Bars", desc: "Corrosion Resistant", img: "sail.png" },
      {
        name: "Jindal Panther",
        desc: "Earthquake Resistant",
        img: "panther.png",
      },
    ],
  },
  {
    key: "bajri",
    title: "BAJRI (GRAVEL)",
    items: [
      { name: "Coarse Bajri", desc: "For Concrete Mixing", img: "bajri.png" },
      {
        name: "Fine Bajri",
        desc: "For Plastering Work",
        img: "fine bajri.png",
      },
      { name: "River Bajri", desc: "Premium Quality Gravel", img: "river.png" },
      { name: "Crusher Bajri", desc: "Crusher Bajri", img: "crusher.png" },
    ],
  },
  {
    key: "reta",
    title: "RETA (SAND)",
    items: [
      { name: "River Sand", desc: "For Construction Use", img: "reta.png" },
      { name: "M-Sand", desc: "Manufactured Sand", img: "m sand.png" },
      {
        name: "Plastering Sand",
        desc: "Fine Grain Quality",
        img: "plater sand.png",
      },
      { name: "Pit Sand", desc: "Locally Available", img: "pit.png" },
    ],
  },
  {
    key: "paints",
    title: "PAINTS",
    items: [
      { name: "Asian Paints", desc: "Beautiful Home Paints", img: "asian.png" },
      { name: "Berger Paints", desc: "Long Lasting Colors", img: "berger.png" },
      {
        name: "Nerolac Paints",
        desc: "Smooth Weather-Proof Finish",
        img: "nerolac.png",
      },
      { name: "Dulux Paints", desc: "Rich & Vibrant Shades", img: "dulux.png" },
    ],
  },
  {
    key: "hardware",
    title: "HARDWARE",
    items: [
      { name: "Nuts & Bolts", desc: "All Sizes Available", img: "bolts.png" },
      {
        name: "Door Fittings",
        desc: "Hinges, Locks & Handles",
        img: "door.png",
      },
      { name: "Pipes & Fittings", desc: "PVC & GI Pipes", img: "pipes.png" },
      {
        name: "Electrical Fittings",
        desc: "Wires, Switches & Boards",
        img: "hardware.png",
      },
    ],
  },
  {
    key: "sanitary",
    title: "SANITARY",
    items: [
      {
        name: "Wash Basin",
        desc: "Premium Ceramic Finish",
        img: "sanatry.png",
      },
      {
        name: "Commode / Toilet Seat",
        desc: "Durable & Easy Clean",
        img: "toilet.jpg",
      },
      {
        name: "Bathroom Fittings",
        desc: "Taps, Showers & Mixers",
        img: "shower.png",
      },
      { name: "Bathroom Tap", desc: "Taps", img: "tap.png" },
    ],
  },
];

export default function Products() {
  const sectionRefs = useRef({});
  const navigate = useNavigate();

  const scrollToCategory = (key) => {
    const el = sectionRefs.current[key];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="products-page">
      <h1 className="products-main-heading">OUR PRODUCTS</h1>
      <p className="products-main-subtitle">
        Har building construction ka saman, genuine quality aur best price par
      </p>

      {/* QUICK CATEGORY NAVIGATION */}
      <div className="category-filters">
        {productCategories.map((cat) => (
          <button
            key={cat.key}
            className="filter-btn"
            onClick={() => scrollToCategory(cat.key)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {productCategories.map((category) => (
        <section
          key={category.key}
          className="product-category-section"
          data-key={category.key}
          ref={(el) => (sectionRefs.current[category.key] = el)}
        >
          <h2 className="category-heading">
            <span className="text-yellow">— </span>
            {category.title}
            <span className="text-yellow"> —</span>
          </h2>

          <div className="product-grid">
            {category.items.map((p) => (
              <div key={p.name} className="product-card">
                <img
                  src={
                    new URL(`../assets/images/${p.img}`, import.meta.url).href
                  }
                  alt={p.name}
                  className="product-img"
                />
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                <button
                  className="btn btn-outline-yellow"
                  onClick={() => navigate("/inquiry")}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
