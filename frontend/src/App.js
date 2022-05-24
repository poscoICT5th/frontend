import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Account/Login";
import MainDashboardOffice from "./components/Dashboard/Office/MainDashboardOffice";
import WarehouseList from "./components/List/WarehouseList";
import InventoryList from "./components/List/InventoryList";
import LogisticsList from "./components/List/LogisticsList";
import LogisticsDetail from "./components/Detail/LogisticsDetail";
import RequestLogisticsListOffice from "./components/List/Office/RequestLogisticsListOffice";
import Map1 from "./components/Map/Map1";
import PreparingPage from "./components/Basic/PreparingPage";
import Sidebar from "./components/Basic/Sidebar";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Main from "./components/Basic/Main";
import "aos/dist/aos.css";
import Aos from "aos";
import Request from "./components/Request/Request";
const { Footer, Sider, Content } = Layout;
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-up" className="">
      <div className="">
        <Layout>
          <Sider style={{ height: "100vh", background: "white", width:"200px" }}>
            <Sidebar />
          </Sider>
          <Layout className="">
            <Content style={{ height: "100vh", background: "white" }}>
              <Routes>
                {/* 로그인 */}
                <Route path="/" exact element={<Login />} />
                {/* 물품리스트 */}
                {/* <Route path="/LogisticsList/:title" element={<LogisticsList />} /> */}
                {/* 창고 관리 */}
                {/* <Route
                  path="/WarehouseList"
                  exact
                  element={<WarehouseList />}
                /> */}
                {/* 재고 관리 */}
                {/* <Route path="/InventoryList" exact element={<InventoryList />} /> */}
                {/* 재고 상세 + 로트번호 */}
                {/* <Route
                  path="/Logisticsdetail/:lot"
                  exact
                  element={<LogisticsDetail />}
                /> */}
                {/* 준비중 */}
                <Route
                  path="/PreparingPage"
                  exact
                  element={<PreparingPage />}
                />
                {/* 사무실에서 현장직으로 입고예정 처리요청 */}
                {/* <Route
                  path="/RequestLogisticsListOffice"
                  exact
                  element={<RequestLogisticsListOffice />}
                /> */}
                <Route path="/Request" exact element={<Request />} />
                {/* 사무실 메인대시보드 */}
                {/* <Route
                  path="/MainDashboardOffice"
                  element={<MainDashboardOffice />}
                /> */}
                <Route path="/Main" element={<Main />} />
                {/* anzi */}
                <Route path="/map1" element={<Map1 />} />
              </Routes>
            </Content>
          </Layout>
          {/* <Footer>
            Footer
          </Footer> */}
        </Layout>
      </div>
    </section>
  );
}

export default App;
