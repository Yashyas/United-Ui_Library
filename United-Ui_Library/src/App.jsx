import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"
import Library from "./pages/Library"

function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  )
}

export default App
