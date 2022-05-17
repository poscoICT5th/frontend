import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Account/Login'
import MainDashboard from './components/Dashboard/MainDashboard'
import Navbar from './components/Basic/Navbar'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<MainDashboard />} />
      </Routes>
    </div>
  )
}

export default App