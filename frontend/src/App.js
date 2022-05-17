<<<<<<< HEAD
import React from "react";
import List1 from "./components/List/List1";
import Menu from "./components/Basic/Menu";
=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Account/Login'
import MainDashboard from './components/Dashboard/MainDashboard'
>>>>>>> cho

function App() {
  return (
    <div>
<<<<<<< HEAD

     <Menu />
      
    
=======
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<MainDashboard />} />
      </Routes>
>>>>>>> cho
    </div>
  )
}

export default App