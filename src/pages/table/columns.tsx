import { Platform, PlatformType, Status, StatusType } from "@/src/enums/status";
import {
  IconTickCircle,
  IconClear,
  IconComment,
  IconMore,
} from "@douyinfe/semi-icons";
import { Avatar, Tag } from "@douyinfe/semi-ui";
import { AvatarColor } from "@douyinfe/semi-ui/lib/es/avatar/interface";

export const columns = [
  {
    title: "标题",
    dataIndex: "name",
    render: (
      text: string,
      record: { nameIconSrc: string | undefined },
      index: any
    ) => {
      return (
        <div>
          <Avatar
            size="small"
            shape="square"
            src={record.nameIconSrc}
            style={{ marginRight: 12 }}
          ></Avatar>
          {text}
        </div>
      );
    },
  },
  {
    title: "平台",
    dataIndex: "platform",
    render: (text: PlatformType) => {
      return <Tag color="red">{Platform[text]}</Tag>;
    },
  },
  {
    title: "交付状态",
    dataIndex: "status",
    render: (text: StatusType) => {
      const tagConfig = {
        success: {
          color: "green" as any,
          prefixIcon: <IconTickCircle />,
          text: "已交付",
        },
        pending: {
          color: "pink" as any,
          prefixIcon: <IconClear />,
          text: "已延期",
        },
        wait: {
          color: "cyan" as any,
          prefixIcon: <IconComment />,
          text: "待评审",
        },
      };
      const tagProps = tagConfig[text];
      return (
        <Tag shape="circle" {...tagProps} style={{ userSelect: "text" }}>
          {tagProps.text}
        </Tag>
      );
    },
  },
  {
    title: "负责人",
    dataIndex: "owner",
    render: (text: string, record: { avatarBg: AvatarColor }, index: any) => {
      return (
        <div>
          <Avatar
            size="small"
            color={record.avatarBg}
            style={{ marginRight: 4 }}
          >
            {typeof text === "string" && text.slice(0, 1)}
          </Avatar>
          {text}
        </div>
      );
    },
  },
  {
    title: "更新日期",
    dataIndex: "updateTime",
  },
  {
    title: "",
    dataIndex: "operate",
    render: () => {
      return <IconMore />;
    },
  },
];
