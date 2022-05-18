import React from "react";
import { Route, Routes } from 'react-router-dom'
import Login from './components/Account/Login'
import Navbar from './components/Basic/Navbar'
import MainDashboardJunior from "./components/Dashboard/Junior/MainDashboardJunior";
import MainDashboardSenior from "./components/Dashboard/Senior/MainDashboardSenior";
import WarehouseList from "./components/List/Common/WarehouseList";
import StockList from "./components/List/Common/StockList";
import RequestProductListJunior from "./components/List/Junior/RequestProductListJunior";
import RequestProductListSenior from "./components/List/Senior/RequestProductListSenior";
import ProductDetail from "./components/Detail/ProductDetail";
import Map1 from './components/Map/Map1'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/WarehouseList" exact element={<WarehouseList />} />
        <Route path="/StockList" exact element={<StockList />} />
        <Route path="/productdetail/:lot" exact element={<ProductDetail />} />
        {/* Junior */}
        <Route path="/MainDashboardJunior" element={<MainDashboardJunior />} />
        <Route path="/RequestProductListJunior" element={<RequestProductListJunior />} />
        {/* Senior */}
        <Route path="/MainDashboardSenior" element={<MainDashboardSenior />} />
        <Route path="/RequestProductListSenior" element={<RequestProductListSenior />} />
        <Route path="/map1" element={<Map1 />} />


      </Routes>
    </div>
  )
}

export default App