import React from "react";
import { Route, Routes } from 'react-router-dom'
import Login from './components/Account/Login'
import MainDashboard from './components/Dashboard/MainDashboard'
import Navbar from './components/Basic/Navbar'
import Anzi from './components/List/anzi'
import Map from './components/Map/Map'
import Map1 from './components/Map/Map1'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/Main" element={<MainDashboard />} />
        <Route path="/anzi" element={<Anzi />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map1" element={<Map1 />} />


      </Routes>
    </div>
  )
}

export default App