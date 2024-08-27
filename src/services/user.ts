import { user } from '@/src/mock/user';

export interface IUserInfo {
  id: number;
  name: string;
  avatar: string;
  password?: string;
}
export function getUserList(params: { page: number, pageSize: number }): Promise<{ data: IUserInfo[], total: number }> {
  console.log('------请求：getUserList------')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { page = 1, pageSize = 10 } = params
      const start = (page - 1) * pageSize
      const end = start + pageSize
      const result = user.slice(start, end);
      resolve({
        data: result || [],
        total: user.length || 0
      })
    }, 1500);
  })
}