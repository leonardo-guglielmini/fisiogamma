import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalContext from "./contexts/GlobalContext"
import axios from 'axios'
import { useEffect, useState } from 'react'

import Default from "./layouts/Default"
import Blank from "./layouts/Blank"

import Homepage from "./pages/Homepage/Homepage"
import Staff from "./pages/Staff/Staff"
import Employee from "./pages/Employee/Employee"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import NotFound from "./pages/NotFound/NotFound"

function App() {

  const [staff, setStaff] = useState([])
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/staff');
        setStaff(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStaff();
  }, []);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await axios.get("http://localhost:3000/api/images");
        setImages(res.data);
        console.log("Fetched images:", res.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchImages()
  }, [])

  return (
    <GlobalContext.Provider value={{ staff, images }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/staff/:id" element={<Employee />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route element={<Blank />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
