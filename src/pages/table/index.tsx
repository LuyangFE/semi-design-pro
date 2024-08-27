import React, { useRef, useState } from "react";
import { Table, Avatar, Tag, Button, Modal, Form, useFormApi } from "@douyinfe/semi-ui";
import useService from "@/src/hooks/useService";
import { getTableData } from "@/src/services/table";
import { Platform, PlatformType, StatusType } from "@/src/enums/status";
import {
  IconTickCircle,
  IconClear,
  IconComment,
} from "@douyinfe/semi-icons";
import { AvatarColor } from "@douyinfe/semi-ui/lib/es/avatar/interface";
import { ColumnProps } from "@douyinfe/semi-ui/lib/es/table";
import { FormApi } from "@douyinfe/semi-ui/lib/es/form";
import { getUserList, IUserInfo } from "@/src/services/user";

const { Input, Select } = Form

const TablePage = () => {
  const [pageNum, setPage] = useState(1);
  const [{ data, loading }] = useService(() => getTableData({ page: pageNum, pageSize: 10 }), [pageNum]);
  const [{ data: userList, loading: userLoading }] = useService(() => getUserList({ page: 1, pageSize: 100 }), []);
  const [visible, setVisible] = useState(false);
  const [modalRecord, setModalRecord] = useState<any>();
  const [okLoading, setOkLoading] = useState(false)
  const formApi = useRef<FormApi>();

  const columns: ColumnProps[] = [
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
      align: "left",
      render: (text: number) => {
        const user = userList?.data?.find(item => item.id === text);
        if (!user) {
          return (
            <div>
              <Avatar
                size="small"
                style={{ marginRight: 4 }}
              >
                U
              </Avatar>
              未知用户
            </div>
          );
        };
        return (
          <div>
            <Avatar
              size="small"
              style={{ marginRight: 4 }}
              src={user.avatar}
            />
            {user.name}
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
          <div className="flex items-center justify-center gap-2">
            <Button type="primary" theme='borderless' onClick={() => editInfo(record)}>编辑</Button>
            <Button type="danger" theme='borderless'>删除</Button>
          </div>
        );
      },
    },
  ];

  const editInfo = (record: any) => {
    setModalRecord(record)
    setVisible(true)
  }

  const handleOk = () => {
    if (!formApi.current) return;
    formApi.current.validate().then((values: any) => {
      setOkLoading(true)
      setTimeout(() => {
        //TODO: save data
        setVisible(false)
        setOkLoading(false)
      }, 1000)
    })
  }

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data?.data}
        pagination={{
          total: data?.total,
          currentPage: pageNum,
          className: 'px-4',
          onChange: (page: number) => {
            setPage(page)
          },
        }}
      />
      <Modal
        title='编辑信息'
        size="large"
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={handleOk}
        okButtonProps={{ loading: okLoading }}
      >
        <Form
          labelPosition='left'
          labelAlign='left'
          labelWidth={100}
          initValues={modalRecord}
          getFormApi={api => formApi.current = api}
        >
          <Input
            field='name'
            label='标题'
            className='min-w-[100px]'
            rules={[{ required: true, message: '请输入标题' }]}
          />
          <Select field='platform' label='平台' className='min-w-[100px]'>
            <Select.Option value='DOUYIN'>抖音</Select.Option>
            <Select.Option value='XIAOHONGSHU'>小红书</Select.Option>
            <Select.Option value='WEIBO'>微博</Select.Option>
          </Select>
          <Select field='status' label='交付状态' className='min-w-[100px]'>
            <Select.Option value='success'>已交付</Select.Option>
            <Select.Option value='wait'>待评审</Select.Option>
            <Select.Option value='pending'>已延期</Select.Option>
          </Select>
          <Select field='owner' label='负责人' className='min-w-[100px]' renderSelectedItem={renderSelectedItem}>
            {userList?.data?.map(item => (
              <Select.Option {...item} key={item.id} value={item.id} className="flex items-center pr-8">
                <Avatar size="extra-small" src={item.avatar} />
                <div className="ml-4">{item.name}</div>
              </Select.Option>
            ))}
          </Select>
        </Form>
      </Modal>
    </div>
  );
};

const renderSelectedItem = (option: any) => {
  console.log(option)
  return (
    <div className="flex items-center gap-2">
      <Avatar size="extra-small" src={option.avatar} />
      {option.name}
    </div>
  )
}
export default TablePage;
