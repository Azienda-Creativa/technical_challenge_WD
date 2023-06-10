import { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"

import PhonePage from "./pages/PhonePage/PhonePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

import { Routes, Route } from "react-router-dom"

function App() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    fetch("../../../data/phones.json")
      .then((res) => res.json())
      .then((list) => setPhones(list))
  }, [])

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<PhonePage phones={phones} />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  )
}

export default App
