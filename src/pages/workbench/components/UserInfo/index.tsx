/**
 * @deprecated 用户信息组件
 */
import React from 'react';
import { Avatar, Tag, Typography } from '@douyinfe/semi-ui';
import defaultHead from '@/src/assets/userHeaders/dadaguai.jpg';

const { Title } = Typography;

interface IUserinfo {
  headImg?: string;
  name: string;
  title: string;
}
export const UserInfo = (props: IUserinfo) => {
  const { headImg, name, title } = props;
  return (
    <div className='flex items-center gap-4'>
      <Avatar size='large' src={headImg || defaultHead} />
      <div className='flex flex-col gap-2' >
        <Title heading={4}>{name}</Title>
        <Tag
          color='orange'
          size='large'
          shape='circle'
          className='px-4 font-bold w-fit'
        >
          {title}
        </Tag>
      </div>
    </div>
  )
}