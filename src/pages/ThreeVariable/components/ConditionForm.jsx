import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React, { useState } from 'react';
import { ATTRIBUTES } from '../../../constants';

const ConditionForm = ({ form, calcu, setShow }) => {
  // console.log('props', form);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const optionscCate = ATTRIBUTES.filter(
    (attr) => attr.type === 'categorical',
  ).map((attr) => {
    return {
      value: attr.key,
      label: attr.label,
      disable: true,
    };
  });

  const onReset = () => {
    form.setFieldsValue({
      data1: undefined,
      data2: undefined,
      data3: undefined,
      data4: undefined,
      data5: undefined,
      data6: undefined,
    });
    setShow(false);
  };

  const onGenerate = () => {
    form
      .validateFields()
      .then(() => {
        // console.log('form', form.getFieldsValue());
        calcu(form.getFieldsValue());
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const onSetDefault = () => {
    form.resetFields();
  };

  const validator = async (rule, value) => {
    if (!value) {
      throw new Error('Please select data');
    }
    const fieldsvalues = form.getFieldsValue();
    let count = 0;
    for (let i in Object.values(fieldsvalues)) {
      if (Object.values(fieldsvalues)[i] === value) {
        count++;
      }
    }
    if (count > 1) {
      throw new Error('Fields cannot be the same');
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
        initialValues={{
          data1: 'TESEX',
          data2: 'PEHSPNON',
          data3: 'TRDPFTPT',
          data4: 'TELFS',
          data5: 'TESCHENR',
          data6: 'TESPEMPNOT',
        }}
      >
        <Form.Item
          name="data1"
          label="Data 1"
          rules={[{ required: true, validator: validator }]}
          style={{ margin: '12px 6px' }}
        >
          <Select
            options={optionscCate}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select an attribute"
          />
        </Form.Item>
        <Form.Item
          name="data2"
          label="Data 2"
          rules={[{ required: true, validator: validator }]}
          style={{ margin: '12px 6px' }}
        >
          <Select
            options={optionscCate}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select an attribute"
          />
        </Form.Item>

        <Form.Item
          name="data3"
          label="Data 3"
          rules={[{ required: true, validator: validator }]}
          style={{ margin: '12px 6px' }}
        >
          <Select
            options={optionscCate}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select an attribute"
          />
        </Form.Item>

        <Form.Item
          name="data4"
          label="Data 4"
          rules={[{ required: true, validator: validator }]}
          style={{ margin: '12px 6px' }}
        >
          <Select
            options={optionscCate}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select an attribute"
          />
        </Form.Item>
        <Form.Item
          name="data5"
          label="Data 5"
          rules={[{ required: true, validator: validator }]}
          style={{ margin: '12px 6px' }}
        >
          <Select
            options={optionscCate}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select an attribute"
          />
        </Form.Item>

        <Form.Item
          name="data6"
          label="Data 6"
          rules={[{ required: true, validator: validator }]}
          style={{ margin: '12px 6px' }}
        >
          <Select
            options={optionscCate}
            style={{ width: 240 }}
            allowClear={true}
            placeholder="Select an attribute"
          />
        </Form.Item>

        <div style={{ margin: '12px 6px', marginLeft: 'auto' }}>
          <Button
            style={{
              display: 'inline-block',
              marginRight: 20,
            }}
            onClick={onSetDefault}
          >
            Default
          </Button>

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
