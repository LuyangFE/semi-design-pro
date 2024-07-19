import { closeOrder, getMarketPrice, getMy } from "@/src/api";
import { Button, Input, Notification, Spin } from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";

const Setting = () => {

  const [token, setToken] = useState('');
  const [start, setStart] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [list, setList] = useState([]);
  // 止盈价格
  const [stopPrice, setStopPrice] = useState();
  // 止盈的订单号
  const [stopOrder, setStopOrder] = useState('');

  const [record, setRecord] = useState(['止盈记录']);

  // 获取价格
  const getPrice = () => {
    getMarketPrice().then(res => {
      setCurrentPrice(Number(res.data.result.marketPrice))
    });
  }
  // 轮询查询价格
  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (start) {
      intervalId = setInterval(getPrice, 50);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [start]);

  // 获取个人信息
  const getMyInfo = () => {
    getMy(token).then(res => {
      setList(res.data.result.list)
    })
  }

  // 关闭订单
  const closeOrderFun = (orderId: string) => {
    closeOrder(orderId, token).then(res => {
      if (res.data.status.code === 0) {
        Notification.success({
          title: res.data.status.msg,
        });
        setRecord(record.concat([`关闭订单：${orderId}-${currentPrice}`]))
      } else {
        Notification.error({
          title: res.data.status.msg,
        });
        setRecord(record.concat([`关闭订单失败：${orderId}`]))
      }
    })
  }

  useEffect(() => {
    if (currentPrice >= Number(stopPrice)) {
      closeOrderFun(stopOrder)
    }
  }, [currentPrice])

  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-4 w-1/2">
        <div className="flex gap-4">
          <Input placeholder='输入token' value={token} onChange={(e) => { setToken(e) }} />
          <Button onClick={() => { getMyInfo() }}>获取订单</Button>
        </div>
        <div>
          <h1>当前价格：{currentPrice}</h1>
        </div>
        <div>
          {list.map((item: any) => {
            return (
              <div>
                <div>订单号：{item.orderId}</div>
                <div>开唱价格：{item.price}</div>
                <div>份数：{item.quantity}</div>
              </div>
            )
          })}
        </div>
        {/* <div className="flex gap-4">
          <Input placeholder='输入订单号' value={order} onChange={(e) => { setOrder(e) }} />
          <Button onClick={() => { closeOrderFun(order) }}>关闭订单</Button>
        </div> */}
        <div>
          <div className="text-lg font-bold mb-4">止盈设置</div>
          <div>
            <div className="text-base font-semibold mb-4">单个止盈</div>
            <div className="flex gap-4 flex-col">
              <div className="flex">
                <div className="text-nowrap w-[120px]">订单号：</div>
                <Input placeholder='订单号' value={stopOrder} onChange={(e) => { setStopOrder(e) }} />
              </div>
              <div className="flex">
                <div className="text-nowrap w-[120px]">止盈价格：</div>
                <Input placeholder='止盈价格' value={stopPrice} onChange={(e) => { setStopPrice(e) }} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => { setStart(true) }}>开始轮询</Button>
          <Button onClick={() => { setStart(false) }}>停止轮询</Button>
        </div>
        <div>
          {record.map((item: any) => {
            return (
              <div>{item}</div>
            )
          })}
          {start && <Spin size="large" />}
        </div>
      </div>
      <div style={{ height: '80vh', width: '30vw' }}>
        <iframe
          src="https://www.nftcn.com/h5/#/pages/project/actives/game/takeOffIndex"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
export default Setting;
