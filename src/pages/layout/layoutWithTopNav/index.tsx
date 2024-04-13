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
    <Layout>
      <Header>
        <Nav
          mode='horizontal'
          header={{
            logo: <IconSemiLogo style={{ height: "36px", fontSize: 36 }} />,
            text: "Semi 运营后台",
          }}
        />
      </Header>
      <Content className='w-screen mt-24 flex justify-center'>
        <Suspense fallback={
          <div className='w-full h-full flex justify-center items-center'>
            <Spin size="large" />
          </div>}
        >
          <Outlet />
        </Suspense>
      </Content>
      <Footer className='flex w-full justify-center mt-12 items-center gap-2'>
        <IconSemiLogo />
        Semi UI Pro
      </Footer>
    </Layout>
  );
};
export default LayoutWithTopNav;
