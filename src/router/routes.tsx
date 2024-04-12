import React, { FC, lazy, ReactElement, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Spin } from '@douyinfe/semi-ui';
import Layout from '../components/Layout';
import { IconDescriptions } from '@douyinfe/semi-icons-lab';

// 使用懒加载导入页面组件
const Test1 = lazy(() => import('@/src/pages/test1'));
const Test2 = lazy(() => import('@/src/pages/test2'));

export interface IRouters {
  path: string;
  element: ReactElement;
  text?: string;
  icon?: ReactElement;
  items?: IRouters[];
  itemKey?: string;
  children?: IRouters[];
}
// 定义路由配置
const routes: IRouters[] = [
  {
    path: '/',
    element: <Test1 />,
    icon: <IconDescriptions />,
    text: 'Dashboard'
  },
  {
    path: '/test1',
    element: <Test1 />,
    icon: <IconDescriptions />,
    text: 'Dashboard'
  },
  {
    path: '/test2',
    element: <Test2 />,
    icon: <IconDescriptions />,
    text: 'Dashboard',
    children: [
      {
        path: '/test2/test1',
        element: <Test1 />,
        text: 'Dashboard'
      },
      {
        path: '/test2/test2',
        element: <Test1 />,
        text: 'Dashboard'
      },
    ]
  },
];

const recursiveFormat = (items: IRouters[]) => {
  const formatResult = items.map((item, index) => {
    item.itemKey = item.path;
    item.items = item.children;
    if (item.items) {
      item.items = recursiveFormat(item.items);
    }
    return item;
  });
  return formatResult;
}

export const formatMenus = () => {
  return recursiveFormat(routes)
};

const RenderRouter: FC = () => {
  // 使用 useRoutes 钩子生成路由元素
  const element = useRoutes(routes);

  // 使用 Suspense 包裹懒加载的组件，并提供 fallback
  return (
    <Suspense fallback={
      <div className='w-screen h-screen flex justify-center items-center'>
        <Spin size="large" />
      </div>}
    >
      <Layout>
        {element}
      </Layout>
    </Suspense>
  );
};

export default RenderRouter;