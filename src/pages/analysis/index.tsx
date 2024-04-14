import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import { LineChart } from './components/LineChart';
import { Histogram } from './components/Histogram';
import { AreaChart } from './components/AreaChart';

const Analysis = () => {
  return (
    <div>
      <Row gutter={8}>
        <LineChart height={500} />
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Histogram height={400} />
        </Col>
        <Col span={12}>
          <AreaChart height={400} />
        </Col>
      </Row>
    </div>
  );
};
export default Analysis;