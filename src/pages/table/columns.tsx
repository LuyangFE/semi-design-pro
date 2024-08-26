import { Platform, PlatformType, StatusType } from "@/src/enums/status";
import {
  IconTickCircle,
  IconClear,
  IconComment,
} from "@douyinfe/semi-icons";
import { Avatar, Tag, Button, Modal } from "@douyinfe/semi-ui";
import { AvatarColor } from "@douyinfe/semi-ui/lib/es/avatar/interface";
import { ColumnProps } from "@douyinfe/semi-ui/lib/es/table";
import { EditModal } from "./editModal";

export const columns: ColumnProps[] = [
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
    title: "操作",
    dataIndex: "actions",
    align: 'center',
    render: (_text: string, record: any, _index: any) => {
      return (
        <div className="flex gap-2 items-center justify-center">
          <Button type="primary" theme='borderless' onClick={() => editInfo(record)}>编辑</Button>
          <Button type="danger" theme='borderless'>删除</Button>
        </div>
      );
    },
  },
];

const editInfo = (record: any) => {
  console.log('record', record)
  Modal.info({
    title: '编辑信息',
    content: <EditModal />,
    icon: null,
    cancelButtonProps: { theme: 'borderless' },
    okButtonProps: { theme: 'solid' },
    size: 'large',
  });
}