import { data } from '@/src/mock/table';

export function getTableData(params: { page: number, pageSize: number }): Promise<any> {
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