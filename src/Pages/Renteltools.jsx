import React from "react";
import { Link } from "react-router-dom";
import "./Renteltools.css";

import kassi from "../assets/images/kassi.png";
import tagari from "../assets/images/tagari.png";
import karni from "../assets/images/Karni.png";
import phawda from "../assets/images/Phawda.png";
import tools from "../assets/images/tools.png";
import hatoda from "../assets/images/hatoda.png";
import plateCumpter from "../assets/images/plate cumbter.png";
import chisel from "../assets/images/chisel.png";
import crane from "../assets/images/crane.png";
import generator from "../assets/images/genrator.png";
import helmet from "../assets/images/helmet.png";
import plumbBob from "../assets/images/plumb bob.png";
import sabbal from "../assets/images/sabbal.png";
import safetyGoggles from "../assets/images/Safety Goggles.png";
import shutringPlates from "../assets/images/shutring plates.png";
import trySquare from "../assets/images/try squre.png";
import waterPump from "../assets/images/water pump.png";
import wireCutter from "../assets/images/wire cutter.png";
import machine from "../assets/images/machine.png";
import angleGrinder from "../assets/images/Angle Grinder.png";
import drill from "../assets/images/drill.png";
import cutter from "../assets/images/cutter.png";
import needle from "../assets/images/needle.png";
import weldingMachine from "../assets/images/welding machine.png";
import jcb from "../assets/images/jcb.png";
import plats from "../assets/images/plats.png";
import scaffolding from "../assets/images/scaffodling.png";
import tape from "../assets/images/tape.png";
import waterLevel from "../assets/images/water level.png";
import stringLine from "../assets/images/String Line.png";
import gloves from "../assets/images/gloves.png";
import shoes from "../assets/images/shoes.png";
import thela from "../assets/images/thela.png";
import shidhi from "../assets/images/shidhi.png";
import wireMeshCutter from "../assets/images/Wire Mesh Cutter.png";

const toolCategories = [
  {
    key: "hand",
    title: "HAND TOOLS (Masonry / Raj Mistri Tools)",
    items: [
      {
        name: "Kassi (Pickaxe / Hoe)",
        desc: "Khudai (digging) ke liye",
        img: kassi,
      },
      {
        name: "Tagari (Trowel / Pan)",
        desc: "Masala uthane aur dene ke liye",
        img: tagari,
      },
      {
        name: "Karni (Small Trowel)",
        desc: "Plaster aur brick-laying finishing",
        img: karni,
      },
      {
        name: "Phawda (Spade / Shovel)",
        desc: "Mitti, ret, bajri uthane ke liye",
        img: phawda,
      },
      {
        name: "Ghan / Hathoda (Hammer)",
        desc: "Nails garne, todhne ke kaam",
        img: hatoda,
      },
      {
        name: "Sabbal (Crowbar)",
        desc: "Bhaari cheezein hatane, todhne",
        img: sabbal,
      },
      {
        name: "Chisel (Chheni) + Hathoda",
        desc: "Patthar / tile cutting ke liye",
        img: chisel,
      },
      {
        name: "Plumb Bob (Saahul)",
        desc: "Deewar seedhi hai ya nahi check karne",
        img: plumbBob,
      },
      {
        name: "Spirit Level (Water Level)",
        desc: "Surface level check karne",
        img: waterLevel,
      },
      {
        name: "Measuring Tape (Fita)",
        desc: "Lambai-chaudai naapne",
        img: tape,
      },
      {
        name: "String Line / Nylon Dori",
        desc: "Seedhi line kheenchne ke liye",
        img: stringLine,
      },
      {
        name: "Float (Ghotai Tool)",
        desc: "Plaster ki finishing smooth karne",
        img: tools,
      },
    ],
  },
  {
    key: "power",
    title: "POWER TOOLS",
    items: [
      { name: "Drill Machine", desc: "Deewar me hole karne", img: drill },
      {
        name: "Angle Grinder",
        desc: "Tiles, steel, marble cutting",
        img: angleGrinder,
      },
      {
        name: "Cutting Machine (Tile Cutter)",
        desc: "Tiles ko size me kaatne",
        img: cutter,
      },
      {
        name: "Welding Machine",
        desc: "Steel / grill welding ke liye",
        img: weldingMachine,
      },
    ],
  },
  {
    key: "heavy",
    title: "HEAVY MACHINES",
    items: [
      {
        name: "Concrete Mixer Machine",
        desc: "Cement, ret, bajri, paani mix karne",
        img: machine,
      },
      {
        name: "Concrete Vibrator (Needle Vibrator)",
        desc: "Concrete ke hawa ke bubbles nikalne",
        img: needle,
      },
      { name: "JCB / Excavator", desc: "Foundation ki khudai", img: jcb },
      {
        name: "Plate Compactor",
        desc: "Mitti / road compact karne",
        img: plateCumpter,
      },
      { name: "Generator", desc: "Bijli backup ke liye", img: generator },
      {
        name: "Water Pump",
        desc: "Paani nikalne / supply ke liye",
        img: waterPump,
      },
      {
        name: "Scaffolding",
        desc: "Oonchai pe kaam karne ke liye platform",
        img: scaffolding,
      },
      { name: "Crane", desc: "Bhaari material upar chadhane", img: crane },
    ],
  },
  {
    key: "measuring",
    title: "MEASURING & LAYOUT TOOLS",
    items: [
      { name: "Measuring Tape", desc: "Lambai naapne ke liye", img: tape },
      {
        name: "Spirit Level",
        desc: "Surface level check karne",
        img: waterLevel,
      },
      {
        name: "Plumb Bob",
        desc: "Vertical alignment check karne",
        img: plumbBob,
      },
      { name: "Try Square", desc: "90° angle check karne", img: trySquare },
    ],
  },
  {
    key: "safety",
    title: "SAFETY EQUIPMENT",
    items: [
      { name: "Helmet", desc: "Sir ki suraksha ke liye", img: helmet },
      {
        name: "Safety Gloves",
        desc: "Haathon ki suraksha ke liye",
        img: gloves,
      },
      {
        name: "Safety Shoes / Boots",
        desc: "Pairo ki suraksha ke liye",
        img: shoes,
      },
      {
        name: "Safety Goggles",
        desc: "Aankho ki suraksha ke liye",
        img: safetyGoggles,
      },
    ],
  },
  {
    key: "misc",
    title: "MISCELLANEOUS",
    items: [
      {
        name: "Wheelbarrow (Thela)",
        desc: "Material transport ke liye",
        img: thela,
      },
      { name: "Ladder (Seedhi)", desc: "Oonchai pe kaam ke liye", img: shidhi },
      {
        name: "Wire Mesh Cutter",
        desc: "Mesh cutting ke liye",
        img: wireCutter,
      },
      {
        name: "Shuttering Plates / Wooden Planks",
        desc: "Concrete casting ke liye mould",
        img: shutringPlates,
      },
    ],
  },
];

export default function RentalTools() {
  return (
    <div className="rental-page">
      <h1 className="rental-main-heading">RENT ANY TOOLS IN OUR SHOP</h1>
      <p className="rental-main-subtitle">
        Ghar ya building banane ke liye har zaroori tool aur machine, best price
        par rent par
      </p>

      {toolCategories.map((category) => (
        <section key={category.key} className="tool-category-section">
          <h2 className="category-heading">
            <span className="text-yellow">— </span>
            {category.title}
            <span className="text-yellow"> —</span>
          </h2>

          <div className="tool-grid">
            {category.items.map((tool, i) => (
              <div key={tool.name} className="tool-card">
                <img src={tool.img} alt={tool.name} className="tool-img" />
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-desc">{tool.desc}</p>
                <Link to="/inquiry" className="book-now-btn">
                  BOOK NOW
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
