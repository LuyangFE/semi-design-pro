import { Form } from '@douyinfe/semi-ui'
import React from 'react'

const { Input } = Form
export const EditModal = () => {
  return (
    <Form labelPosition='left'>
      <Input field='UserName' label='用户名' className='flex'/>
    </Form>
  )
}
