import React from 'react';
import { Avatar, Tag, Typography } from '@douyinfe/semi-ui';
import xiaoxiaoguai from '@/src/assets/userHeaders/xiaoxiaoguai.jpg';

const { Title, Text } = Typography;
export const ContentCard = () => {
  return (
    <div className="flex flex-col w-full p-4">
      <div className='flex flex-col gap-4'>
        <Title heading={4}>Semi UI</Title>
        <div className='flex gap-2'>
          <Tag>Semi UI</Tag>
          <Tag>ByteDance</Tag>
        </div>
        <div className='max-w-[800px] line-clamp-3'>
          <Text>
            Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
          </Text>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar size='small' src={xiaoxiaoguai} />
          <Text link >小小怪下士</Text>
          <Text type='secondary' >发布在</Text>
          <Text link={{ href: 'https://semi.design/zh-CN' }} >https://semi.design/zh-CN</Text>
          <Text type='quaternary' className='ml-12' >2024-04-15 19:45</Text>
        </div>
      </div>
    </div>
  )
}
