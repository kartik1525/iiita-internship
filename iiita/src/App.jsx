import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import FacultyPage from "./pages/FacultyPage"


function App() {
  return (
    <Routes>

      {/* Homepage */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Faculty Listing Page */}
      <Route
        path="/faculty"
        element={<FacultyPage />}
      />
    </Routes>
  )
}

export default App