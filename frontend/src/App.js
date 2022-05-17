import React from "react";
import List1 from "./components/List/List1";
import Menu from "./components/Basic/Menu";
import Forms from "./components/List/Forms";
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Account/Login'
import MainDashboard from './components/Dashboard/MainDashboard'

function App() {
  return (
    <div>
      <Menu />
      <Forms/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<MainDashboard />} />
      </Routes>
    </div>
  )
}

export default App