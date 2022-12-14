import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { ATTRIBUTES } from '../../../constants';

const ConditionForm = ({ form, calcu, setShow }) => {
  // console.log('props', form);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const defaultTypeOptions = ATTRIBUTES.filter(
    (v) => v.type === 'categorical',
  ).map((v) => {
    {
      return { value: v.key, label: v.label };
    }
  });

  const [typeOptions, setTypeOptions] = useState(defaultTypeOptions);
  const [dataSelectDisable, setDataSelectDisable] = useState(false);

  const attr = Form.useWatch('data', form);

  const onTypeChange = (_type) => {
    form.setFieldsValue({ data: null });
    if (!_type) {
      setTypeOptions([]);
      setDataSelectDisable(true);
      return;
    }
    let types = [];
    setDataSelectDisable(false);
    for (let i in ATTRIBUTES) {
      if (ATTRIBUTES[i].type == _type) {
        types.push({
          value: ATTRIBUTES[i].key,
          label: ATTRIBUTES[i].label,
        });
      }
    }
    setTypeOptions(types);
  };

  const onReset = () => {
    form.setFieldsValue({ type: null, data: null });
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
      <Form
        form={form}
        layout="inline"
        initialValues={{ type: 'categorical', data: 'PEEDUCA' }}
      >
        <Form.Item name="type" label="Type" rules={[{ required: true }]}>
          <Select
            options={[
              { value: 'categorical', label: 'Categorical' },
              { value: 'numeric', label: 'Numeric', disabled: true },
            ]}
            style={{ width: 160 }}
            onChange={onTypeChange}
            allowClear={true}
            placeholder="Select a data type"
          />
        </Form.Item>
        <Form.Item name="data" label="Data" rules={[{ required: true }]}>
          <Select
            options={typeOptions}
            style={{ width: 240 }}
            disabled={dataSelectDisable}
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
