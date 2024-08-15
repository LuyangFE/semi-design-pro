import React from 'react';
import { Button, Input, Typography } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import { Filter } from './components/Filter';
import { Content } from './components/Content';

const { Title } = Typography;
const SearchList = () => {
  return (
    <div className='w-full h-full rounded-xl'>
      <div className='px-12 pt-8'>
        <Title heading={3}>搜索列表</Title>
      </div>
      <div className='flex flex-col items-center w-full gap-8 px-12 pb-12 mt-12'>
        <Input
          size='large'
          className='max-w-[500px]'
          placeholder='搜索...'
          showClear
          suffix={
            <Button size='large' icon={<IconSearch style={{ color: 'var(--semi-color-white)'}} />} theme='solid' iconPosition='right'>搜索</Button>
          }
        />
        <Filter />
        <Content />
      </div>
    </div>
  )
}
export default SearchList;
