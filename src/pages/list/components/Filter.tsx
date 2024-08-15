import React from "react";
import {
  Avatar,
  Checkbox,
  CheckboxGroup,
  Divider,
  Select,
  Tag,
  Typography,
} from "@douyinfe/semi-ui";
import { OptionProps } from "@douyinfe/semi-ui/lib/es/select";
import Option from "@douyinfe/semi-ui/lib/es/select/option";
import { JSX } from "react/jsx-runtime";
import styles from '../index.module.scss';

const { Text } = Typography;

const list = [
  {
    name: "夏可漫",
    email: "xiakeman@example.com",
    avatar:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/dy.png",
  },
  {
    name: "申悦",
    email: "shenyue@example.com",
    avatar:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/bag.jpeg",
  },
  {
    name: "曲晨一",
    email: "quchenyi@example.com",
    avatar:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/Viamaker.png",
  },
  {
    name: "文嘉茂",
    email: "wenjiamao@example.com",
    avatar:
      "https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/6fbafc2d-e3e6-4cff-a1e2-17709c680624.png",
  },
];
const selectList = [
  { value: 'abc', label: '抖音', otherKey: 0 },
  { value: 'ulikecam', label: '轻颜相机', disabled: true, otherKey: 1 },
  { value: 'jianying', label: '剪映', otherKey: 2 },
  { value: 'toutiao', label: '今日头条', otherKey: 3 },
];
export const Filter = () => {
  const renderMultipleWithCustomTag2 = (optionNode: any, { onClose }: any) => {
    const content = (
      <Tag
        avatarSrc={optionNode.avatar}
        avatarShape="square"
        closable={true}
        onClose={onClose}
        size="large"
      >
        {optionNode.name}
      </Tag>
    );
    return {
      isRenderInTag: false,
      content,
    };
  };

  const renderCustomOption = (item: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Option> & Readonly<OptionProps>, index: number) => {
    const optionStyle = {
      display: "flex",
      paddingLeft: 24,
      paddingTop: 10,
      paddingBottom: 10,
    };
    return (
      <Select.Option
        value={item.name}
        style={optionStyle}
        showTick={true}
        {...item}
        key={item.email}
      >
        <Avatar size="small" src={item.avatar} />
        <div style={{ marginLeft: 8 }}>
          <div style={{ fontSize: 14 }}>{item.name}</div>
          <div
            style={{
              color: "var(--color-text-2)",
              fontSize: 12,
              lineHeight: "16px",
              fontWeight: "normal",
            }}
          >
            {item.email}
          </div>
        </div>
      </Select.Option>
    );
  };
  return (
    <div className="w-full bg-[var(--semi-color-bg-0)] rounded-xl p-6 flex flex-col shadow-md">
      <div className={`${styles.checkBoxGroup} flex items-center gap-8`}>
        <Text className="text-nowrap">所属类目:</Text>
        <CheckboxGroup
          type="pureCard"
          defaultValue={["1", "3"]}
          direction="horizontal"
          className="flex flex-wrap overflow-auto"
        >
          {[...Array(40).keys()].map((item) => (
            <Checkbox key={item} className="text-nowrap" value={item}>
              <div className="flex items-center justify-center w-12">类目{item + 1}</div>
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
      <Divider margin={24} />
      <div className="flex items-center gap-8">
        <Text>Owner:</Text>
        <Select
          placeholder="请选择"
          maxTagCount={2}
          style={{ width: 280 }}
          onChange={(v) => console.log(v)}
          defaultValue={["申悦", "曲晨一"]}
          multiple
          renderSelectedItem={renderMultipleWithCustomTag2}
        >
          {list.map((item, index) => renderCustomOption(item, index))}
        </Select>
      </div>
      <Divider margin={24} />
      <div className="flex items-center gap-8">
        <Text>所属类目:</Text>
        <Select placeholder="请选择业务线" style={{ width: 180 }} optionList={selectList}></Select>
      </div>
    </div>
  );
};
