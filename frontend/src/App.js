import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Account/Login";
import MainDashboardJunior from "./components/Dashboard/Junior(X)/MainDashboardJunior";
import MainDashboardOffice from "./components/Dashboard/Office/MainDashboardOffice";
import WarehouseList from "./components/List/Common/WarehouseList";
import StockList from "./components/List/Common/StockList";
import ProductList from "./components/List/Common/ProductList";
import ProductDetail from "./components/Detail/ProductDetail";
import Map1 from "./components/Map/Map1";
import PreparingPage from "./components/Basic/PreparingPage";
import Sidebar1 from "./components/Basic/Sidebar1";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Footer, Sider, Content } = Layout;
function App() {
  return (
    <div>
      <Layout>
        <Sider>
          <Sidebar1 />
        </Sider>
        <Layout>
          <Content>
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/WarehouseList" exact element={<WarehouseList />} />
              <Route path="/StockList" exact element={<StockList />} />
              <Route
                path="/productdetail/:lot"
                exact
                element={<ProductDetail />}
              />
              <Route path="/ProductList" element={<ProductList />} />
              <Route path="/PreparingPage" exact element={<PreparingPage />} />
              {/* Junior */}
              <Route
                path="/MainDashboardJunior"
                element={<MainDashboardJunior />}
              />
              {/* Office */}
              <Route
                path="/MainDashboardOffice"
                element={<MainDashboardOffice />}
              />
              {/* anzi */}
              <Route path="/map1" element={<Map1 />} />
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
