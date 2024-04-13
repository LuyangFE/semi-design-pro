/**
 * @deprecated 代办列表
 */
import React, { useEffect, useState } from 'react'
import { Card, List, Tag, Typography } from '@douyinfe/semi-ui'

export const TodoList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<{
    name: string;
    customer: string;
  }[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const dataList = [];
      for(let n = 0; n < 15; n++) {
        dataList.push({
          customer: 'grey',
          name: `Semi Design Title ${n}`,
        });
      };
      setDataSource(dataList);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Card
      bodyStyle={{ padding: !loading ? 0 : 12, height: 300 }}
      title="今日代办"
      loading={ loading }
      headerExtraContent={
        <Typography.Text link>
          查看全部
        </Typography.Text>
      }
    >
      <List
        className='h-[300px] overflow-auto'
        dataSource={dataSource}
        renderItem={item => {
          return (
            <div
              className={
                'p-4 mb-2 hover:bg-[var(--semi-color-tertiary-light-hover)] flex justify-between'
              }
            >
              <span style={{ color: 'var(--semi-color-text-0)', fontSize: 16, fontWeight: 500 }}>
                {item.name}
              </span>
              <Tag color='blue'>字节跳动</Tag>
            </div>
          )
        }}
      />
    </Card>
  )
}
