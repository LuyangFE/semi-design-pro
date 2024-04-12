/**
 * @description 路由组件包裹页，用于重定向和鉴权等
 */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  component: React.ReactNode;
  auth?: boolean;
}
export default function Wrapper(props: IProps) {
  const { component, auth = false } = props;
  const { pathname } = useLocation();
  const isLogin = false;

  // 登录校验
  if (auth && !isLogin) {
    return <Navigate to='/login' />
  }
  // 重定向
  if (pathname === '/') {
    return <Navigate to='/dashboard/analysis' />
  }
  return component;
};