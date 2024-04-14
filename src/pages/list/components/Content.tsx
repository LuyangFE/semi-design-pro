import React from "react";
import { Avatar, Divider, Tag, Typography } from "@douyinfe/semi-ui";
import headImg from "@/src/assets/avatar.jpg";
import { ContentCard } from "./ContentCard";

const { Title, Text } = Typography;
export const Content = () => {
  return (
    <div className="w-full bg-[var(--semi-color-bg-0)] rounded-xl p-6 flex flex-col shadow-md">
      {[...Array(20).keys()].map((item) => (
        <div key={item}>
          <ContentCard />
          {item !== 19 && <Divider margin={24} />}
        </div>
      ))}
    </div>
  );
};
