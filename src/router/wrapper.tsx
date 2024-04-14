/**
 * @description 路由组件包裹页，用于重定向和鉴权等
 */
import { Spin } from '@douyinfe/semi-ui';
import React, { Suspense } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  component: React.ReactNode;
  auth?: boolean;
}
function Wrapper(props: IProps) {
  const { component, auth = false } = props;
  const { pathname } = useLocation();
  const isLogin = window.localStorage.getItem('isLogin');

  // 登录校验
  if (auth && !isLogin) {
    return <Navigate to='/userCenter/login' />
  }
  // 重定向
  if (pathname === '/' || pathname === 'dashboard') {
    return <Navigate to='/dashboard/analysis' />
  } else {
    return component;
  }
};
export { Wrapper }