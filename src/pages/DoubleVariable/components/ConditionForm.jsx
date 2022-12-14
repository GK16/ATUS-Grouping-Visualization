import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React, { useState } from 'react';
import { ATTRIBUTES } from '../../../constants';

const ConditionForm = ({ form, calcu, setShow }) => {
  // console.log('props', form);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [typeOptions, setTypeOptions] = useState([]);
  const attr = Form.useWatch('data', form);

  const onReset = () => {
    form.resetFields();
    setTypeOptions([]);
    setShow(false);
  };

  const onGenerate = () => {
    if (!attr) {
      console.log('errorerror');
      form.validateFields();
      return;
    }
    calcu(attr);
  };

  return (
    <div
      style={{
        padding: 24,
        minHeight: 60,
        background: colorBgContainer,
        borderRadius: 8,
        margin: 36,
        marginTop: 0,
        marginBottom: 24,
      }}
    >
      <Form form={form} layout="inline">
        <Form.Item name="data1" label="Data 1" rules={[{ required: true }]}>
          <Select
            options={typeOptions}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select an attribute"
          />
        </Form.Item>
        <Form.Item name="data2" label="Data 2" rules={[{ required: true }]}>
          <Select
            options={typeOptions}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select an attribute"
          />
        </Form.Item>

        <div style={{ marginLeft: 'auto' }}>
          <Button
            style={{
              display: 'inline-block',
              marginRight: 20,
            }}
            onClick={onReset}
          >
            Reset
          </Button>

          <Form.Item style={{ display: 'inline-block' }}>
            <Button type="primary" onClick={onGenerate}>
              Generate
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default ConditionForm;
