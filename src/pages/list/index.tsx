import { useEffect, useState } from 'react';
import { getMaterialList } from '../../api';
import { Button } from '@douyinfe/semi-ui';
import Card from './components/card';
import './style.css';
import Layout from '../../components/Layout';

export interface data {
  id: number,
  name: string,
  thumbnailSrc: string,
  shareNum: number,
  downNum: number,
  visitNum: number,
  extensionTag: string,
  size: string,
};

const List = () => {

  return (
    <Layout>
      <Button>123</Button>
    </Layout>
  );
};
export default List;