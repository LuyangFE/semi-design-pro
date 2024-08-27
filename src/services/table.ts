import { data } from '@/src/mock/table';
import { PlatformType, StatusType } from '../enums/status';

export interface ITableData {
  id: string;
  name: string;
  nameIconSrc: string;
  platform: PlatformType,
  status: StatusType,
  owner: string,
  updateTime: string,
  avatarBg: string,
}
export function getTableData(params: { page: number, pageSize: number }): Promise<any> {
  console.log('------请求：getTableData------')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { page = 1, pageSize = 10 } = params
      const start = (page - 1) * pageSize
      const end = start + pageSize
      const result = data.slice(start, end);
      resolve({
        data: result || [],
        total: data.length || 0
      })
    }, 1500);
  })
}