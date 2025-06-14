import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import SobreNos from './pages/SobreNos'
import Navbar from './components/Navbar'
import Artigos from './pages/Artigos'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/sobre-nos" element={<SobreNos />} />
      <Route path="/artigos" element={<Artigos />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App