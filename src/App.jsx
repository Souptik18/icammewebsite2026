import { Route, Routes } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Benifits from './pages/Benifits'
import Committees from './pages/Committees'
import Contact from './pages/Contact'
import Downloads from './pages/Downloads'
import Home from './pages/Home'
import Mission from './pages/Mission'
import NotFound from './pages/NotFound'
import Paper from './pages/Paper'
import Register from './pages/Register'
import Social from './pages/Social'
import Speakers from './pages/Speakers'
import Sponsorship from './pages/Sponsorship'
import Tracks from './pages/Tracks'
import Venue from './pages/Venue'
import Visa from './pages/Visa'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/benefits" element={<Benifits />} />
        <Route path="/committee" element={<Committees />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/paper" element={<Paper />} />
        <Route path="/register" element={<Register />} />
        <Route path="/social" element={<Social />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/topics" element={<Tracks />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
