import { materialList} from './mock/list'
export function getMaterialList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(materialList)
    }, 3000)
  })
}