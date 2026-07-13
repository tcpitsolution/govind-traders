import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AlertProvider } from "./components/Alert";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Renteltools from "./Pages/Renteltools.jsx";
import Inquiry from "./Pages/Inquiry.jsx";
import ContactUs from "./Pages/Contactus.jsx";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/rental-tools" element={<Renteltools />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </AlertProvider>
  );
}
