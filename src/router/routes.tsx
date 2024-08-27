import React, { FC, lazy, ReactElement, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Spin } from '@douyinfe/semi-ui';
import { IconConfig, IconNavigation } from '@douyinfe/semi-icons-lab';
import Wrapper from './wrapper';
import { IconAlertTriangle, IconArticle, IconEdit, IconGridView1, IconList } from '@douyinfe/semi-icons';

// 使用懒加载导入页面组件
const Layout = lazy(() => import('@/src/pages/layout'));
const LayoutWithTopNav = lazy(() => import('@/src/pages/layout/layoutWithTopNav'));

const Analysis = lazy(() => import('@/src/pages/analysis'));
const Workbench = lazy(() => import('@/src/pages/workbench'));
const Setting = lazy(() => import('@/src/pages/setting'));

const Login = lazy(() => import('@/src/pages/login'));
const Register = lazy(() => import('@/src/pages/register'));

const CommonForm = lazy(() => import('@/src/pages/form'));
const DynamicForm = lazy(() => import('@/src/pages/form/dynamicForm'));

const SearchList = lazy(() => import('@/src/pages/list'));
const VirtualList = lazy(() => import('@/src/pages/list/virtualList'));

const DetailCommon = lazy(() => import('@/src/pages/detail'));

const Table = lazy(() => import('@/src/pages/table'));

const NotFond = lazy(() => import('@/src/pages/exception/404'));
const NoAuth = lazy(() => import('@/src/pages/exception/403'));

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
    itemKey: '/table',
    icon: <IconGridView1 />,
    text: '表格页',
    items: [
      {
        itemKey: '/table/basic',
        text: '基础表格'
      }
    ]
  },
  {
    itemKey: '/form',
    icon: <IconEdit />,
    text: '表单页',
    items: [
      {
        itemKey: '/form/common',
        text: '基础表单'
      },
      {
        itemKey: '/form/dynamic',
        text: '动态表单'
      }
    ]
  },
  {
    itemKey: '/list',
    icon: <IconList />,
    text: '列表页',
    items: [
      {
        itemKey: '/list/search',
        text: '搜索列表'
      },
      {
        itemKey: '/list/virtual',
        text: '虚拟列表'
      }
    ]
  },
  {
    itemKey: '/detail',
    icon: <IconArticle />,
    text: '详情页',
    items: [
      {
        itemKey: '/detail/common',
        text: '基础详情页'
      }
    ]
  },
  {
    itemKey: '/exception',
    icon: <IconAlertTriangle />,
    text: '异常页',
    items: [
      {
        itemKey: '/exception/404',
        text: '404'
      },
      {
        itemKey: '/exception/403',
        text: '403'
      }
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
      },
      {
        path: 'form/common',
        element: <Wrapper component={<CommonForm />} />
      },
      {
        path: 'form/dynamic',
        element: <Wrapper component={<DynamicForm />} />
      },
      {
        path: 'list/search',
        element: <Wrapper component={<SearchList />} />
      },
      {
        path: 'list/virtual',
        element: <Wrapper component={<VirtualList />} />
      },
      {
        path: 'detail/common',
        element: <Wrapper component={<DetailCommon />} />
      },
      {
        path: 'table/basic',
        element: <Wrapper component={<Table />} />
      }
    ]
  },
  // 有顶部导航，没有侧边导航写这里
  {
    path: '/userCenter',
    element: <LayoutWithTopNav />,
    children: [
      {
        path: 'login',
        element: <Wrapper component={<Login />} />
      },
      {
        path: 'register',
        element: <Wrapper component={<Register />} />
      },
    ]
  },
  // 异常页路由
  {
    path: '/exception',
    element: <LayoutWithTopNav />,
    children: [
      {
        path: '404',
        element: <Wrapper component={<NotFond />} />
      },
      {
        path: '403',
        element: <Wrapper component={<NoAuth />} />
      },
    ]
  },
  // 兜底页面，需要放在最下方
  {
    path: '*',
    element: (
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <NotFond />
      </div>
    )
  }
]

const RenderRouter: FC = () => {
  // 使用 useRoutes 钩子生成路由元素
  const element = useRoutes(routers);
  return (
    <Suspense fallback={
      <div className='flex items-center justify-center w-screen h-screen'>
        <Spin />
      </div>
    }>
      {element}
    </Suspense>
  );
};

export default RenderRouter;