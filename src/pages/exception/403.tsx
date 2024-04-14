import {
  IllustrationNoAccess,
  IllustrationNoAccessDark,
} from "@douyinfe/semi-illustrations";
import { Button, Empty } from "@douyinfe/semi-ui";
import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <Empty
        image={<IllustrationNoAccess style={{ width: 250, height: 250 }} />}
        darkModeImage={
          <IllustrationNoAccessDark style={{ width: 250, height: 250 }} />
        }
        description={"权限不足"}
      >
        <Button onClick={() => location.href='/'} type="primary" theme="solid" style={{ padding: '6px 24px' }}>
          返回首页
        </Button>
      </Empty>
    </div>
  );
};
export default Index;
