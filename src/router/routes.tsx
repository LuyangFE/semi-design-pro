import React, { FC, lazy, ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Button, Empty } from '@douyinfe/semi-ui';
import { IconConfig, IconNavigation } from '@douyinfe/semi-icons-lab';
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations';
import Wrapper from './wrapper';

// 使用懒加载导入页面组件
const Layout = lazy(() => import('@/src/pages/layout'));
const Login = lazy(() => import('@/src/pages/login'));
const Analysis = lazy(() => import('@/src/pages/analysis'));
const Workbench = lazy(() => import('@/src/pages/workbench'));
const Setting = lazy(() => import('@/src/pages/setting'));

export interface IRouters {
  text: string;
  icon?: ReactElement;
  items?: IRouters[];
  itemKey: string;
}
// 左侧导航路由
export const MenuRoutes: IRouters[] = [
  {
    itemKey: '/',
    icon: <IconNavigation />,
    text: 'Dashboard',
    items: [
      {
        itemKey: '/dashboard/analysis',
        text: '分析页'
      },
      {
        itemKey: '/dashboard/workbench',
        text: '工作台'
      },
    ]
  },
  {
    itemKey: '/setting',
    icon: <IconConfig />,
    text: '设置'
  }
];

// 浏览器路由
const routers: RouteObject[] = [
  {
    path: '/',
    element: <Wrapper component={<Layout />} />,
    // 导航内的路由写在这里，同时要添加到Menu中
    children: [
      {
        path: 'dashboard/analysis',
        element: <Wrapper component={<Analysis />} />
      },
      {
        path: 'dashboard/workbench',
        element: <Wrapper component={<Workbench />} />
      },
      {
        path: 'setting',
        element: <Wrapper component={<Setting />} auth />
      }
    ]
  },
  // 导航外写这里
  {
    path: '/login',
    element: <Login />
  },
  // 兜底页面，需要放在最下方
  {
    path: '*',
    element: (
      <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <Empty
          image={<IllustrationNotFound style={{ width: 150, height: 150 }} />}
          darkModeImage={<IllustrationNotFoundDark style={{ width: 150, height: 150 }} />}
          description={'页面找不到嘞~'}
        />
      </div>
    )
  }
]

const RenderRouter: FC = () => {
  // 使用 useRoutes 钩子生成路由元素
  const element = useRoutes(routers);
  return element;
};

export default RenderRouter;