import { getList } from '@/src/api'
import React, { useEffect } from 'react'
import VirtualList from '@/src/components/VirtualList'

const virtualList = () => {
  const [list, setList] = React.useState<any[]>([])
  const windowHeight = window.innerHeight;

  useEffect(() => {
    getList(20000).then(res => {
      setList(res)
    })
  }, [])
  return (
    <VirtualList windowHeight={windowHeight} itemHeight={250} list={list} />
  )
}

export default virtualList;