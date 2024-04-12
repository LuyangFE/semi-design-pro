import React, { useEffect, useState } from "react";
import { Nav, Layout as MainLayout, Avatar, Dropdown, Button, Tooltip } from "@douyinfe/semi-ui";
import { IconSemiLogo, IconMoon, IconSetting, IconBell } from "@douyinfe/semi-icons";
import avatarImg from '@/src/assets/avatar.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatMenus } from '@/src/router/routes';
import { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";

const { Header, Sider, Content } = MainLayout;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const [isDark, setIsDark] = useState<Boolean>(false);
  const [pathKey, setPathKey] = useState<React.ReactText[]>([]);

  const changeMode = () => {
    setIsDark(!isDark);
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode');
    } else {
        body.setAttribute('theme-mode', 'dark');
    }
  }

  const goSetting = () => {
    console.log('Click Setting!')
  }

  const showNotices = () => {
    console.log('Click Bell!')
  }

  const IconButtons = [
    {
      icon: <IconBell size="extra-large" />,
      event: () => showNotices(),
      tip: '消息通知'
    },
    {
      icon: <IconMoon size="extra-large" />,
      event: () => changeMode(),
      tip: `切换到${isDark ? '亮色' : '暗色'}模式`
    },
    {
      icon: <IconSetting size="extra-large" />,
      event: () => goSetting(),
      tip: '设置'
    }
  ]
  
  // 顶部导航右侧icon按钮
  const renderIcons = () => {
    return (
      <div className="flex gap-2 mr-4">
        {
          IconButtons.map((item, index) => {
            return (
              <Tooltip content={item.tip} key={index}>
                <Button
                  theme="borderless"
                  icon={item.icon}
                  onClick={item.event}
                  type="tertiary"
                />
              </Tooltip>
            )
          })
        }
      </div>
    )
  }

  const onSelect = (data: OnSelectedData) => {
    console.log(data)
    setPathKey([...data.selectedKeys])
		navigate(data.itemKey as string)
  }

  useEffect(() => {
    setPathKey([pathname]);
  }, []);
  return (
    <MainLayout>
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
                    <Dropdown.Item>退出</Dropdown.Item>
                  </Dropdown.Menu>
                }
              >
                <Avatar size="small" color='light-blue' style={{ margin: 4 }} src={avatarImg} />
              </Dropdown>
            </>
          }
        />
      </Header>
      <MainLayout>
        <Sider>
        <Nav
          selectedKeys={pathKey}
          items={formatMenus()}
          onSelect={(data) => onSelect(data)}
        />
        </Sider>
        <Content className="px-16 py-12">
          {children}
        </Content>
      </MainLayout>
    </MainLayout>
  );
};
