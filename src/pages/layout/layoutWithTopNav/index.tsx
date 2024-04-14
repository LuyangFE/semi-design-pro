import React, { Suspense, useState } from 'react';
import { Button, Divider, Input, Layout, Nav, Notification, Spin, Typography } from '@douyinfe/semi-ui';
import { IconUser, IconSemiLogo, IconKey, IconFeishuLogo } from '@douyinfe/semi-icons';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Footer, Content } = Layout;
const { Text }  = Typography;
const LayoutWithTopNav = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState<string>();
  const [password, setPassword] = useState<string>();

  const login = () => {
    if (account === 'admin' && password === '111111') {
      window.localStorage.setItem('isLogin', 'true');
      navigate('/');
    } else {
      Notification.error({title: '账号或密码错误'})
    }
  }
  return (
    <Layout className='bg-[var(--semi-color-tertiary-light-default)] h-screen'>
      <Header>
        <Nav
          mode='horizontal'
          header={{
            logo: <IconSemiLogo style={{ height: "36px", fontSize: 36 }} />,
            text: "Semi 运营后台",
          }}
        />
      </Header>
      <Content className='flex items-center justify-center w-screen mt-24'>
        <Outlet />
      </Content>
      <Footer className='flex items-center justify-center w-full gap-2 mt-12'>
        <IconSemiLogo />
        Semi UI Pro
      </Footer>
    </Layout>
  );
};
export default LayoutWithTopNav;
