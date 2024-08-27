import React from 'react';
import { Col, Row, Typography } from '@douyinfe/semi-ui';
import { UserInfo } from './components/UserInfo';
import { OverviewStatic } from './components/OverviewStatic';
import { TodoList } from './components/TodoList';
import { CardGroups } from './components/CardGroups';
import { DateOverview } from './components/DateOverview';
import { Entrance } from './components/Entrance';

const { Title } = Typography;
const Workbench = () => {

  return (
    <div className='px-8 py-6'>
      <Row gutter={16}>
        <Col span={18} className='flex flex-col gap-8'>
          <OverviewStatic treated={203} ongoing={301} onWaiting={86} />
          <TodoList />
          {/* <Title heading={3}>进行中的项目</Title> */}
          <CardGroups />
        </Col>
        <Col span={6} className='flex flex-col gap-8'>
          <UserInfo name='大大怪将军' title='前端工程师' />
          <DateOverview />
          <Entrance />
        </Col>
      </Row>
    </div>
  );
};

export default Workbench;