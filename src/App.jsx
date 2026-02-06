import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Committees from './pages/Committees'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Paper from './pages/Paper'
import Register from './pages/Register'
import Speakers from './pages/Speakers'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/committee" element={<Committees />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paper" element={<Paper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
