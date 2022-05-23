import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
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
    getItem("User", "1", <UserOutlined />, [
      getItem("회원정보", "Profile"),
      getItem("회원탈퇴", "2"),
    ]),
    getItem("물류", "2", <UserOutlined />, [
      getItem("입고", "List"),
      getItem("출고", "4"),
      getItem("이동", "5"),
    ]),

    getItem("창고", "3", <UserOutlined />, [
      getItem("창고 위치", "6"),
      getItem("출고", "7"),
      getItem("이동", "8"),
    ]),
    getItem("재고", "4", <UserOutlined />, [
      getItem("조회", "9"),
      getItem("재고MAP", "10"),
      getItem("창고별 재고", "11"),
    ]),
    getItem("Trend", "5", <UserOutlined />, [
      getItem("재고예측", "12"),
      getItem("수요예측", "13"),
    ]),
    getItem("Files", "6", <UserOutlined />, [
      getItem("재고예측", "16"),
      getItem("수요예측", "17"),
    ]),
  ];

  return (
    <div>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
          }}
          items={items11}
          onClick={(e) => {
            console.log(e.key);
            navigate(`/${e.key}`);
          }}
        />
      </Sider>
    </div>
  );
}

export default Sidebar;
