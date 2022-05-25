import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { handleTabTitle } from "../../store.js"
const { Sider } = Layout;
function Sidebar() {
  let navigate = useNavigate();
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items11 = [
    getItem("User", "User", <UserOutlined />, [
      getItem("회원정보", "Profile"),
      getItem("회원탈퇴", "MainDashboardOffice"),
    ]),

    getItem("물류", "물류", <UserOutlined />, [
      getItem("입고관리", "ManageInOut", <UserOutlined />, [
        getItem("입출고 관리", "LogisticsList"),
        getItem("창고내 LOT 분리", "ManageInOut2"),
        getItem("창고이동 승인확인", "ManageInOut3"),
        getItem("기타 입,출고 등록", "RequestInOut"),
      ]),
      getItem("이송관리", "ManageIn", <UserOutlined />, [
        getItem("이송 요청 처리", "ManageIn1"),
        getItem("이송 실적 등록", "ManageIn2"),
        getItem("이송 입고 확정", "ManageIn3"),
      ]),
      getItem("출고관리", "ManageOut", <UserOutlined />, [
        getItem("출하요청내역", "ManageOut1"),
        getItem("출하확정", "ManageOut2"),
        getItem("매출마감", "ManageOut3"),
      ]),
    ]),
    getItem("창고", "Warehouse", <UserOutlined />, [
      getItem("창고 조회", "WarehouseList"),
      getItem("창고 이동 등록", "RequestMove"),
      getItem("출고", "Warehouse2"),
      getItem("이동", "Warehouse3"),
    ]),
    getItem("재고", "Inventory", <UserOutlined />, [
      getItem("조회", "InventoryList"),
      getItem("재고MAP", "Inventory2"),
      getItem("창고별 재고", "Inventory3"),
    ]),
    getItem("Trend", "Trend", <UserOutlined />, [
      getItem("재고예측", "Trend1"),
      getItem("수요예측", "Trend2"),
    ]),
    getItem("Temp", "Temp", <UserOutlined />, [
      getItem("Temp1", "Temp1"),
      getItem("Temp2", "Temp2"),
    ]),
  ];
  const dispatch = useDispatch();
  return (
    <div>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["User"]}
          defaultOpenKeys={["User"]}
          style={{
            height: "100%",
          }}
          items={items11}
          onClick={(e) => {
            dispatch(handleTabTitle(e.key))
          }}
        />
      </Sider>
    </div>
  );
}

export default Sidebar;
