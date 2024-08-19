
export enum Status {
  PENDING = 'pending',
  SUCCESS = 'success',
  WAIT ='wait',
}

export enum Platform {
  DOUYIN = '抖音',
  WEIBO = '微博',
  XIAOHONGSHU = '小红书',
}

export type PlatformType = 'DOUYIN' | 'WEIBO' | 'XIAOHONGSHU';

export type StatusType = 'pending' | 'success' | 'wait';