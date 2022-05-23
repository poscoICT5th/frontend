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
      getItem("회원정보", "1"),
      getItem("회원탈퇴", "2"),
    ]),

    getItem("물류", "2", <UserOutlined />, [
      getItem("입고관리", "Profile", <UserOutlined />, [
        getItem("현재고 조회", "3"),
        getItem("창고내 LOT 분리", "4"),
        getItem("창고이동 승인확인", "5"),
        getItem("기타 입,출고 등록", "6"),
      ]),
      getItem("이송관리", "3", <UserOutlined />, [
        getItem("이송 요청 처리", "7"),
        getItem("이송 실적 등록", "8"),
        getItem("이송 입고 확정", "9"),
      ]),
      getItem("출고관리", "4", <UserOutlined />, [
        getItem("출하요청내역", "10"),
        getItem("출하확정", "11"),
        getItem("매출마감", "12"),
      ]),
    ]),
    getItem("창고", "5", <UserOutlined />, [
      getItem("창고 위치", "13"),
      getItem("출고", "14"),
      getItem("이동", "15"),
    ]),
    getItem("재고", "6", <UserOutlined />, [
      getItem("조회", "16"),
      getItem("재고MAP", "17"),
      getItem("창고별 재고", "18"),
    ]),
    getItem("Trend", "7", <UserOutlined />, [
      getItem("재고예측", "19"),
      getItem("수요예측", "20"),
    ]),
    getItem("Files", "8", <UserOutlined />, [
      getItem("재고예측", "21"),
      getItem("수요예측", "22"),
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
