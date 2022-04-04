import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Reviews from "./pages/Reviews"
import Header from "./components/Header/Header"
import Dashboard from "./pages/Dashboard"
import E404 from "./pages/E404"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </div>
  )
}

export default App
