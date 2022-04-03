import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Reviews from "./pages/Reviews"
import Header from "./components/Header/Header"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<p>Hello world</p>} />
      </Routes>
    </div>
  )
}

export default App
