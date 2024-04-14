import React from "react";
import { Card, CardGroup, Typography } from "@douyinfe/semi-ui";

export const CardGroups = () => {
  const { Text } = Typography;

  return (
    <Card
      title="进行中的项目"
      bordered={false}
      headerExtraContent={<Text link>全部项目</Text>}
      bodyStyle={{ padding: 0 }}
    >
      <CardGroup type="grid" className="max-h-[300px] overflow-auto">
        {new Array(200).fill(null).map((v, idx) => (
          <Card
            key={idx}
            shadows="hover"
            title="Card title"
            headerLine={false}
            style={{ width: '25%' }}
            headerExtraContent={<Text link>More</Text>}
          >
            <Text>Card content</Text>
          </Card>
        ))}
      </CardGroup>
    </Card>
  );
};
