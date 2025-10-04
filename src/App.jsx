import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NewsEvents from './Pages/NewsEvents'
import Affiliations from './Pages/Affiliations'
import Partner from './Pages/Partner'
import Alumni from './Pages/Alumni'
import Placement from './Pages/Placement'
import Search from './Pages/Search'
import ADSE from './Pages/Courses/ADSE'
import HDSE from './Pages/Courses/HDSE'
import Courses from './Pages/Courses/Courses'
import SmartProfessional from './Pages/Courses/SmartProfessional'
import ShortCourse from './Pages/Courses/ShortCourse'
import Languages from './Pages/Courses/Languages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsEvents />} />
        <Route path="/affiliations" element={<Affiliations />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/courses-adse" element={<ADSE />} />
        <Route path="/courses-hdse" element={<HDSE />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses-sp" element={<SmartProfessional />} />
        <Route path="/courses-sc" element={<ShortCourse />} />
        <Route path="/courses-lg" element={<Languages />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App
