import React from "react";
import { Typography } from '@douyinfe/semi-ui';

const { Title } = Typography;
export const DateOverview = () => {
  return (
    <div>
      <Title heading={6}>季度总览</Title>
        <div className='p-2 mt-4 flex flex-wrap gap-1 rounded border-solid border-[1px] border-[var(--semi-color-border)]' >
          {[...Array(90).keys()].map((item) => (
            <div className={`w-3 h-3 rounded ${Math.floor(Math.random() * 10) % 2 ? 'bg-gray-200' : 'bg-green-300'}`} key={item}></div>
          ))}
        </div>
    </div>
  )
};