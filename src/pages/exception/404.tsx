import {
  IllustrationNotFound,
  IllustrationNotFoundDark,
} from "@douyinfe/semi-illustrations";
import { Button, Empty } from "@douyinfe/semi-ui";
import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <Empty
        image={<IllustrationNotFound style={{ width: 250, height: 250 }} />}
        darkModeImage={
          <IllustrationNotFoundDark style={{ width: 250, height: 250 }} />
        }
        description={"页面找不到嘞~"}
      >
        <Button onClick={() => location.href='/'} type="primary" theme="solid" style={{ padding: '6px 24px' }}>
          返回首页
        </Button>
      </Empty>
    </div>
  );
};
export default Index;
