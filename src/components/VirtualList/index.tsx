import { getList } from '@/src/api'
import React, { useEffect, useMemo } from 'react'
import { Divider, Spin } from '@douyinfe/semi-ui'
import styles from './index.module.scss'
import { ContentCard } from '@/src/pages/list/components/ContentCard'

interface IProps {
  windowHeight: number;
  itemHeight: number;
  list: any[];
}
const VirtualList = (props: IProps) => {
  const { windowHeight, itemHeight, list } = props;
  const [start, setStart] = React.useState(0);
  const [startOffset, setStartOffset] = React.useState(0);

  const listHeight = useMemo(() => {
    return list.length * itemHeight;
  }, [list, itemHeight])

  const visibleCount = useMemo(() => {
    return Math.ceil(windowHeight / itemHeight);
  }, [windowHeight, itemHeight])

  const transFormStyle = useMemo(() => {
    return `translate3d(0, ${startOffset}px, 0)`;
  }, [startOffset])

  const visibleData = useMemo(() => {
    return list.slice(start, Math.min(start + visibleCount, list.length))
  }, [list, start, visibleCount])

  const handleScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const visibleStart = Math.floor(scrollTop / itemHeight);
    const startOffset = scrollTop - (scrollTop % itemHeight)
    setStartOffset(startOffset);
    setStart(visibleStart);
  }
  return (
    <div className='h-full overflow-y-auto relative' onScroll={handleScroll}>
      <Spin wrapperClassName={styles.spin} spinning={list.length === 0}>
        {/* 撑起列表内容 */}
        <div className='absolute top-0 left-0 right-0 z-[-1]' style={{ height: listHeight + 'px' }}></div>
        {/* 列表内容 */}
        <div className='absolute top-0 left-0 right-0 z-[1]' style={{ transform: transFormStyle }}>
          {/* 列表项 */}
          {visibleData?.map((item) => (
            <div key={item}>
              <ContentCard />
              {item !== list[list.length - 1] && <Divider margin={24} />}
            </div>
          ))}
        </div>
      </Spin>
    </div>
  )
}

export default VirtualList;