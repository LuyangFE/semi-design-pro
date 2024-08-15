import React from "react";
import { Descriptions, Divider, Space, Tag } from "@douyinfe/semi-ui";

const DetailCommon = () => {
  const data = [
    { key: "抖音号", value: "SemiDesign" },
    { key: "主播类型", value: "自由主播" },
    { key: "安全等级", value: "3级" },
    {
      key: "垂类标签",
      value: (
        <Space>
          <Tag size="small" shape="circle" color="amber">
            互联网资讯
          </Tag>
          <Tag size="small" shape="circle" color="violet">
            编程
          </Tag>
        </Space>
      ),
    },
    { key: "作品数量", value: "88888888" },
    {
      key: "认证状态",
      value: "这是一个很长很长很长很长很长很长很长很长很长的值",
      span: 3,
    },
  ];
  const data2 = [
    { key: '实际用户数量', value: '1,480,000' },
    { key: '7天留存', value: '98%' },
    { key: '安全等级', value: '3级' },
    { key: '垂类标签', value: <Tag style={{ margin: 0 }}>电商</Tag> },
    { key: '认证状态', value: '未认证' },
];
  return (
    <div className="px-8 py-6">
      <div className='bg-[var(--semi-color-bg-0)] p-4 rounded'>
        <Descriptions layout="horizontal" align="plain" data={data} column={3} />
        <Divider margin={32} />
        <Descriptions layout="horizontal" align="plain" data={data2} column={4} />
        <Divider margin={32} />
        <Descriptions data={data} column={2} />
      </div>
    </div>
  );
};

export default DetailCommon;
