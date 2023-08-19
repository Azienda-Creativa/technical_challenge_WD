import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import PhonePage from "./pages/PhonePage/PhonePage"
import PhoneDetail from "./pages/PhonePage/PhoneDetail"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/phones" />}
        />

        <Route
          path="/phones"
          element={<PhonePage />}
        />

        <Route
          path="/phones/:id"
          element={<PhoneDetail />}
          //element={<PhoneDetail />}
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
