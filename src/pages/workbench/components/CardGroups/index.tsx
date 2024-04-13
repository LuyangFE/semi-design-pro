import React from "react";
import { Card, CardGroup, Typography } from "@douyinfe/semi-ui";

export const CardGroups = () => {
  const { Text } = Typography;

  return (
    <CardGroup spacing={8} className="max-h-[300px] overflow-auto">
      {new Array(7).fill(null).map((v, idx) => (
        <Card
          key={idx}
          shadows="hover"
          title="Card title"
          headerLine={false}
          style={{ width: 'calc((100% - 24px) / 4)' }}
          headerExtraContent={<Text link>More</Text>}
        >
          <Text>Card content</Text>
        </Card>
      ))}
    </CardGroup>
  );
};
