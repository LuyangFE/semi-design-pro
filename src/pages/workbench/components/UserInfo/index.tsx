/**
 * @deprecated 用户信息组件
 */
import React from 'react';
import { Avatar, Tag, Typography } from '@douyinfe/semi-ui';
import defaultHead from '@/src/assets/avatar.jpg';

const { Title } = Typography;

interface IUserinfo {
  headImg?: string;
  name: string;
  title: string;
}
export const UserInfo = (props: IUserinfo) => {
  const { headImg, name, title } = props;
  return (
    <div className='flex gap-4 items-center'>
      <Avatar size='large' src={headImg || defaultHead} />
      <div className='flex flex-col gap-2' >
        <Title heading={4}>{name}</Title>
        <Tag
          color='orange'
          size='large'
          shape='circle'
          className='w-fit px-4 font-bold'
        >
          {title}
        </Tag>
      </div>
    </div>
  )
}