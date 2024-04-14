import { chinaNumChar } from "@/src/common";
import { IconPlus } from "@douyinfe/semi-icons";
import { Button, Card, Col, Row } from "@douyinfe/semi-ui";
import React, { useEffect, useState } from "react";

export const Entrance = () => {
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() =>{
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Card title="快捷导航" loading={loading}>
      <Row>
        {new Array(6).fill(null).map((_, index) => (
          <Col span={6} key={index}>
            <Button type="tertiary" theme="borderless">
              操作{chinaNumChar[index + 1]}
            </Button>
          </Col>
        ))}
        <Button icon={<IconPlus />}>添加</Button>
      </Row>
    </Card>
  );
};
