import React from "react";
import List1 from "./components/List/List1";
import Forms from "./components/List/Forms";
import { Route, Routes } from 'react-router-dom'
import Login from './components/Account/Login'
import MainDashboard from './components/Dashboard/MainDashboard'
import Navbar from './components/Basic/Navbar'
import Anzi from './components/List/anzi'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/Main" element={<MainDashboard />} />
        <Route path="/anzi" element={<Anzi />} />
      </Routes>
    </div>
  )
}

export default App