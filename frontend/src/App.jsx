import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import GlobalContext from "./contexts/GlobalContext"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";

import Default from "./layouts/Default"
import Blank from "./layouts/Blank"

import Homepage from "./pages/Homepage"
import Employee from "./pages/Employee"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

import ScrollToTop from "./components/scrollToTop"

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Default />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/staff/:slug" element={<Employee />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<Blank />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {

  const [staff, setStaff] = useState([])
  const [images, setImages] = useState([]);
  const [services, setServices] = useState([]);
  const containerSize = "max-w-screen sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto";

  useEffect(() => {
    async function fetchStaff() {
      try {
        const res = await axios.get('http://localhost:3000/api/staff');
        setStaff(res.data);
      } catch (err) {
        console.error("Error fetching staff:", err);
      }
    };

    fetchStaff();
  }, []);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await axios.get("http://localhost:3000/api/images");
        setImages(res.data);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    }
    fetchImages()
  }, [])

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await axios.get("http://localhost:3000/api/services");
        setServices(res.data);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    }
    fetchServices()
  }, [])

  return (
    <GlobalContext.Provider value={{ staff, images, services, containerSize }}>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
