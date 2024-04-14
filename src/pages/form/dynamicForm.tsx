import React from "react";
import { Form, Button } from '@douyinfe/semi-ui';
const DynamicForm = () => {
  return (
    <div className='flex items-center justify-center h-full rounded'>
      <Form className='bg-[var(--semi-color-bg-0)] p-4' style={{ width: 450 }}>
        {({ formState }) => (
          <React.Fragment>
            <Form.Input field="name" label="用户名称:" />
            <Form.RadioGroup field="isAnchor" label="是否已注册主播">
              <Form.Radio value="yes">yes</Form.Radio>
              <Form.Radio value="no">no</Form.Radio>
            </Form.RadioGroup>
            {formState.values.isAnchor === "yes" ? (
              <Form.Input field="liveRoom" label="直播间名称" />
            ) : null}
            <Button htmlType="submit">提交</Button>
          </React.Fragment>
        )}
      </Form>
    </div>
  );
};
export default DynamicForm;
