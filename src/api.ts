import { materialList} from './mock/list'
import axios from 'axios';
export function getMaterialList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(materialList)
    }, 3000)
  })
}

export function getMarketPrice() {
  return axios.post('https://api-pro.nftcn.com.cn/nms/dubbo/flybattle/appApi/flyBattle/getMarketPrice')
}

export function getMy(token: string) {
  return axios({
    url: 'https://api-pro.nftcn.com.cn/nms/dubbo/flybattle/appApi/flyBattle/getTradedOrder',
    method: 'post',
    data: {
      pageNum: 1,
      pageSize: 10,
    },
    headers: {
      // nftcnapiappsecret: 'BEACC2F8AB4307C239E9E3CCD5627ED5',
      // nftcnapisignature: 'bnlIQTI04QHo+8gWJWbf7Q7ZxzH4Q51vJKaM9sfW9Jqq/yTuXkzxciWLJFpUblwh/R91Og5sdb2gFxZVPrk8fxhS/7MDAw3pteSob6ufj/PvFxgukXeOdIiBwLYwPVUDH9blZEF8DITH9Ro9zB76MsdEb2Jkd44ebK+Ldttk5BDfleyrdPvo4+UvWs9owY5kJpqOnDqDqEJonPhxjfKib9gk3jyDAC/BBcJACNS9h+i7t5whtxlBcxdGdViOT8C4An0r7cY476fBFfxyCEq8cIAEYXNGHoWbxyhj6SMUSoPjX2ZF/5rtn0g/q0B8hAUK1X4EjGUI8Be6yincw9Kz+g==',
      // nftcnapinonce: '010814762020932700667',
      authorization: token
    }
  })
}

export function closeOrder(orderId: any, token: string) {
  return axios({
    url: 'https://api-pro.nftcn.com.cn/nms/dubbo/flybattle/appApi/flyBattle/closeOrder',
    method: 'post',
    data: {
      orderId: orderId,
      status: 1
    },
    headers: {
      // nftcnapiappsecret: 'BEACC2F8AB4307C239E9E3CCD5627ED5',
      // nftcnapisignature: 'bnlIQTI04QHo+8gWJWbf7Q7ZxzH4Q51vJKaM9sfW9Jqq/yTuXkzxciWLJFpUblwh/R91Og5sdb2gFxZVPrk8fxhS/7MDAw3pteSob6ufj/PvFxgukXeOdIiBwLYwPVUDH9blZEF8DITH9Ro9zB76MsdEb2Jkd44ebK+Ldttk5BDfleyrdPvo4+UvWs9owY5kJpqOnDqDqEJonPhxjfKib9gk3jyDAC/BBcJACNS9h+i7t5whtxlBcxdGdViOT8C4An0r7cY476fBFfxyCEq8cIAEYXNGHoWbxyhj6SMUSoPjX2ZF/5rtn0g/q0B8hAUK1X4EjGUI8Be6yincw9Kz+g==',
      // nftcnapinonce: '010814762020932700667',
      authorization: token
    }
  })
}