import { materialList} from './mock/list'
import axios from 'axios';
export function getMaterialList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(materialList)
    }, 3000)
  })
}

export function getList(number: number): Promise<number[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...Array(number).keys()])
    }, 1500);
  })
}

export function sendMessage() {
  return axios({
    url: '/api/v1/chat/completions',
    method: 'post',
    data: {
      model: "gpt-3.5-turbo",
      messages: [
          {
            role: "user",
            content: "nebula的中文是什么意思"
          }
      ],
      temperature: 0.7
    },
    headers: {
      authorization: '自己的authorization'
    }
  })
}