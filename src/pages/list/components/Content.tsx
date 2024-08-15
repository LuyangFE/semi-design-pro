import React from "react";
import { Avatar, Divider, Spin, Tag, Typography } from "@douyinfe/semi-ui";
import headImg from "@/src/assets/avatar.jpg";
import { ContentCard } from "./ContentCard";
import useService from "@/src/hooks/useService";
import { getList } from "@/src/api";

const { Title, Text } = Typography;
export const Content = () => {
  const [{ data, loading}] = useService(() => getList(20))
  return (
    <div className="w-full bg-[var(--semi-color-bg-0)] rounded-xl p-6 flex flex-col shadow-md">
      <Spin spinning={loading} />
      {data && data.map((item) => (
        <div key={item}>
          <ContentCard />
          {item !== 19 && <Divider margin={24} />}
        </div>
      ))}
    </div>
  );
};
