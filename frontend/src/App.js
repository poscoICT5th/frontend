import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Account/Login";
import MainDashboardOffice from "./components/Dashboard/Office/MainDashboardOffice";
import WarehouseList from "./components/List/WarehouseList";
import StockList from "./components/List/StockList";
import ProductList from "./components/List/ProductList";
import ProductDetail from "./components/Detail/ProductDetail";
import Map1 from "./components/Map/Map1";
import PreparingPage from "./components/Basic/PreparingPage";
import Sidebar from "./components/Basic/Sidebar";
import "antd/dist/antd.css";
import { Layout } from "antd";
import RequestProductListOffice from "./components/List/Office/RequestProductListOffice";
import Tab from "./components/Tab";
import "aos/dist/aos.css";
import Aos from "aos";
import Request from "./components/Request/Request";
const { Footer, Sider, Content } = Layout;
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <section data-aos="fade-up" className="">
        <Layout>
          <Sider style={{ height: "100vh", background: "white" }}>
            <Sidebar />
          </Sider>
          <Layout>
            <Content style={{ height: "100vh", background: "white" }}>
              <Routes>
                {/* 로그인 */}
                <Route path="/" exact element={<Login />} />
                {/* 물품리스트 */}
                <Route path="/ProductList/:title" element={<ProductList />} />
                {/* 창고 관리 */}
                <Route
                  path="/WarehouseList"
                  exact
                  element={<WarehouseList />}
                />
                {/* 재고 관리 */}
                <Route path="/StockList" exact element={<StockList />} />
                {/* 재고 상세 + 로트번호 */}
                <Route
                  path="/productdetail/:lot"
                  exact
                  element={<ProductDetail />}
                />
                {/* 준비중 */}
                <Route
                  path="/PreparingPage"
                  exact
                  element={<PreparingPage />}
                />
                {/* 사무실에서 현장직으로 입고예정 처리요청 */}
                <Route
                  path="/RequestProductListOffice"
                  exact
                  element={<RequestProductListOffice />}
                />
                <Route path="/Request" exact element={<Request />} />
                {/* 사무실 메인대시보드 */}
                <Route
                  path="/MainDashboardOffice"
                  element={<MainDashboardOffice />}
                />
                <Route path="/Tab" element={<Tab />} />
                {/* anzi */}
                <Route path="/map1" element={<Map1 />} />
              </Routes>
              <Footer style={{ height: "", background: "white" }}>
                Footer
              </Footer>
            </Content>
          </Layout>
        </Layout>
      </section>
    </div>
  );
}

export default App;
