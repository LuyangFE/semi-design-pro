import React, { Suspense, useEffect, useState } from "react";
import {
  Nav,
  Layout as MainLayout,
  Avatar,
  Dropdown,
  Button,
  Tooltip,
  Spin,
  Popover,
} from "@douyinfe/semi-ui";
import {
  IconSemiLogo,
  IconMoon,
  IconSetting,
  IconBell,
} from "@douyinfe/semi-icons";
import avatarImg from "@/src/assets/userHeaders/dadaguai.jpg";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MenuRoutes } from "@/src/router/routes";
import { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";
import { NotificationContent } from "./components/NotificationContent";

const { Header, Sider, Content } = MainLayout;

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDark, setIsDark] = useState<boolean>(false);
  const [pathKey, setPathKey] = useState<React.ReactText[]>([]);
  const [showBell, setShowBell] = useState<boolean>(false);

  const changeMode = () => {
    setIsDark(!isDark);
    const body = document.body;
    if (body.hasAttribute("theme-mode")) {
      body.removeAttribute("theme-mode");
    } else {
      body.setAttribute("theme-mode", "dark");
    }
  };

  const goSetting = () => {
    console.log("Click Setting!");
  };

  const showNotices = () => {
    setShowBell(true);
  };

  const logout = () => {
    window.localStorage.removeItem("isLogin");
    navigate("/userCenter/login");
  };

  const IconButtons = [
    {
      icon: (
        <Popover
          onClickOutSide={() => setShowBell(false)}
          visible={showBell}
          content={<NotificationContent />}
          trigger="custom"
          clickToHide={false}
          className="w-[500px] h-80 overflow-auto"
        >
          <IconBell size="extra-large" />
        </Popover>
      ),
      event: () => showNotices(),
      // tip: '消息通知'
    },
    {
      icon: <IconMoon size="extra-large" />,
      event: () => changeMode(),
      tip: `切换到${isDark ? "亮色" : "暗色"}模式`,
    },
    {
      icon: <IconSetting size="extra-large" />,
      event: () => goSetting(),
      tip: "设置",
    },
  ];

  // 顶部导航右侧icon按钮
  const renderIcons = () => {
    return (
      <div className="flex gap-2 mr-4">
        {IconButtons.map((item, index) => {
          return item?.tip ? (
            <Tooltip content={item?.tip} key={index}>
              <Button
                theme="borderless"
                icon={item.icon}
                onClick={item.event}
                type="tertiary"
              />
            </Tooltip>
          ) : (
            <Button
              key={index}
              theme="borderless"
              icon={item.icon}
              onClick={item.event}
              type="tertiary"
            />
          );
        })}
      </div>
    );
  };

  const onSelect = (data: OnSelectedData) => {
    // 设置浏览器title
    document.title = `${data.selectedItems[0].text}-Semi UI Pro`;
    setPathKey([...data.selectedKeys]);
    navigate(data.itemKey as string);
  };

  useEffect(() => {
    setPathKey([pathname]);
  }, [pathname]);
  return (
    <MainLayout className="bg-[var(--semi-color-tertiary-light-default)]">
      <Header>
        <Nav
          className="min-w-screen"
          mode="horizontal"
          header={{
            logo: <IconSemiLogo style={{ height: "36px", fontSize: 36 }} />,
            text: "Semi 运营后台",
          }}
          footer={
            <>
              {renderIcons()}
              <Dropdown
                position="bottomRight"
                render={
                  <Dropdown.Menu>
                    <Dropdown.Item>详情</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>退出</Dropdown.Item>
                  </Dropdown.Menu>
                }
              >
                <Avatar
                  size="small"
                  color="light-blue"
                  style={{ margin: 4 }}
                  src={avatarImg}
                />
              </Dropdown>
            </>
          }
        />
      </Header>
      <MainLayout>
        <Sider>
          <Nav
            defaultIsCollapsed
            mode="vertical"
            style={{ height: "100%", minHeight: "calc(100vh - 60px)" }}
            selectedKeys={pathKey}
            items={MenuRoutes}
            onSelect={(data) => onSelect(data)}
            footer={{
              collapseButton: true,
            }}
          />
        </Sider>
        <Content className="overflow-auto" style={{ height: 'calc(100vh - 60px)' }}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center w-screen h-screen">
                <Spin />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Content>
      </MainLayout>
    </MainLayout>
  );
}
