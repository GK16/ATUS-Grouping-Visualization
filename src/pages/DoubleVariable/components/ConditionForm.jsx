import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React, { useState } from 'react';
import { ATTRIBUTES } from '../../../constants';

const ConditionForm = ({ form, calcu, setShow }) => {
  // console.log('props', form);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const _data1 = Form.useWatch('data1', form);
  const _data2 = Form.useWatch('data2', form);

  const onReset = () => {
    form.resetFields();
    setShow(false);
  };

  const onGenerate = () => {
    if (!_data1 || !_data2 || _data1 === _data2) {
      console.log('errorerror');
      form.validateFields();
      return;
    }
    calcu(_data1, _data2);
  };

  const options = ATTRIBUTES.filter((attr) => attr.type === 'categorical').map(
    (attr) => {
      return {
        value: attr.key,
        label: attr.label,
      };
    },
  );

  const validator2 = async (rule, value) => {
    if (!value) {
      throw new Error('Please select data');
    }
    if (value === _data1) {
      throw new Error('Two fields cannot be the same');
    }
  };

  const validator1 = async (rule, value) => {
    if (!value) {
      throw new Error('Please select data');
    }
    if (value === _data2) {
      throw new Error('Two fields cannot be the same');
    }
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
      <Form
        form={form}
        layout="inline"
        initialValues={{ data1: 'PEEDUCA', data2: 'TUDIARYDAY' }}
      >
        <Form.Item
          name="data1"
          label="Data 1"
          rules={[{ required: true, validator: validator1 }]}
        >
          <Select
            options={options}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select an attribute"
          />
        </Form.Item>
        <Form.Item
          name="data2"
          label="Data 2"
          rules={[{ required: true, validator: validator2 }]}
        >
          <Select
            options={options}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select another attribute"
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
