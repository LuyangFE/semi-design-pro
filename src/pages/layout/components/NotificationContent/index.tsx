/**
 * @description 小铃铛通知内容
 */
import { Avatar, List, Spin } from '@douyinfe/semi-ui';
import React, { useEffect, useState } from 'react';



// TODO 滚动加载，虚拟列表
export const NotificationContent = () => {
  const [dataSource, setDataSource] = useState<{
    color: string;
    title: string;
  }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const dataList = [];
      for(let n = 0; n < 5; n++) {
        dataList.push({
          color: 'grey',
          title: `Semi Design Title ${n}`,
        });
      };
      setDataSource(dataList);
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className='h-80 w-full flex items-center justify-center pt-4'>
      {
        loading ? <Spin /> : (
          <List
            dataSource={dataSource}
            renderItem={item => (
              <List.Item
                header={<Avatar>SE</Avatar>}
                main={
                  <div>
                    <span style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}>
                      {item.title}
                    </span>
                    <p style={{ color: 'var(--semi-color-text-2)', margin: '4px 0' }}>
                      Semi Design
                      设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                      Web 应用。
                    </p>
                  </div>
                }
              />
            )}
          />
        )
      }
    </div>
  )
};