import kaixin from '@/src/assets/userHeaders/kaixin.jpg';
import cuxin from '@/src/assets/userHeaders/cuxin.jpg';
import xiaoxin from '@/src/assets/userHeaders/xiaoxin.jpg';
import tianxin from '@/src/assets/userHeaders/tianxin.jpg';
import huaxin from '@/src/assets/userHeaders/huaxin.jpg';
import dadaguai from '@/src/assets/userHeaders/dadaguai.jpg';
import xiaoxiaoguai from '@/src/assets/userHeaders/xiaoxiaoguai.jpg';
import { IUserInfo } from '../services/user';
export const user: IUserInfo[] = [
  {
    id: 1,
    name: '开心超人',
    password: '123456',
    avatar: kaixin,
  },
  {
    id: 2,
    name: '粗心超人',
    password: '123456',
    avatar: cuxin,
  },
  {
    id: 3,
    name: '小心超人',
    password: '123456',
    avatar: xiaoxin,
  },
  {
    id: 4,
    name: '甜心超人',
    password: '123456',
    avatar: tianxin,
  },
  {
    id: 5,
    name: '花心超人',
    password: '123456',
    avatar: huaxin,
  },
  {
    id: 6,
    name: '大大怪将军',
    password: '123456',
    avatar: dadaguai,
  },
  {
    id: 7,
    name: '小小怪下士',
    password: '123456',
    avatar: xiaoxiaoguai,
  },
]