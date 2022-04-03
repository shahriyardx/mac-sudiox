import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Hello world</p>} />
      </Routes>
    </div>
  )
}

export default App
