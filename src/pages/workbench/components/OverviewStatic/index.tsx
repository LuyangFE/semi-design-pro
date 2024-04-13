/**
 * @deprecated 预览组件
 */
import React from 'react'
import { Col, Row } from '@douyinfe/semi-ui'

interface IOverview {
  treated: number;
  ongoing: number;
  onWaiting: number;
}
export const OverviewStatic = (props: IOverview) => {
  const { treated, onWaiting, ongoing } = props;
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <div className="w-full h-32 rounded bg-gradient-to-r from-violet-600 to-violet-300 p-4 cursor-default">
            <div className="text-gray-100 font-medium text-xl">待处理的需求</div>
            <div className='text-white font-["Orbitron"] font-semibold text-4xl mt-4'>{treated}</div>
          </div>
        </Col>
        <Col span={8}>
          <div className="w-full h-32 rounded bg-gradient-to-r from-orange-600 to-orange-300 p-4 cursor-default">
            <div className="text-gray-100 font-medium text-xl">进行中的项目</div>
            <div className='text-white font-["Orbitron"] font-semibold text-4xl mt-4'>{ongoing}</div>
          </div>
        </Col>
        <Col span={8}>
          <div className="w-full h-32 rounded bg-gradient-to-r from-blue-600 to-blue-300 p-4 cursor-default">
            <div className="text-gray-100 font-medium text-xl">待排期的项目</div>
            <div className='text-white font-["Orbitron"] font-semibold text-4xl mt-4'>{onWaiting}</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
