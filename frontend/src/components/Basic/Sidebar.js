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
<<<<<<< HEAD
        getItem("입고요청내역(조회)", "LogisticsList"),
        getItem("기타 입,출고 등록", "Request"),
=======
        getItem("입출고 관리", "LogisticsList"),
        getItem("창고내 LOT 분리", "ManageInOut2"),
        getItem("창고이동 승인확인", "ManageInOut3"),
        getItem("기타 입,출고 등록", "RequestInOut"),
>>>>>>> cho
      ]),
      getItem("출고관리", "ManageOut", <UserOutlined />, [
        getItem("출하요청내역(조회)", "ManageOut1"),
      ]),
    ]),
    getItem("창고", "Warehouse", <UserOutlined />, [
      getItem("창고 조회", "WarehouseList"),
<<<<<<< HEAD

=======
      getItem("창고 이동 등록", "RequestMove"),
      getItem("출고", "Warehouse2"),
      getItem("이동", "Warehouse3"),
>>>>>>> cho
    ]),
    getItem("재고", "Inventory", <UserOutlined />, [
      getItem("재고조회", "InventoryList"),
      getItem("재고MAP", "Inventory2"),
    ]),
    getItem("Trend", "Trend", <UserOutlined />, [
      getItem("재고예측", "Trend1"),
      getItem("수요예측", "Trend2"),
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
