import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalContext from "./contexts/GlobalContext"

import Default from "./layouts/Default"
import Blank from "./layouts/Blank"

import Homepage from "./pages/Homepage"
import Staff from "./pages/Staff"
import Employee from "./pages/Employee"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <GlobalContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/employee" element={<Employee />} />
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
