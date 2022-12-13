import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React from 'react';
import {ATTRIBUTES} from "../../../constants"

const ConditionForm = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    console.log(1324, ATTRIBUTES)

    const types = ATTRIBUTES.map(({key, label}) => {
      return {value: key, label}
    })
    console.log(432, types)

    return (
        <div
          style={{
            padding: 24,
            minHeight: 60,
            background: colorBgContainer,
            borderRadius: 8,
            margin: 36,
            marginTop: 0,
            marginBottom: 24
          }}
        >
          <Form 
            // {...layout} 
            form={form} 
            layout="inline"
          >
            <Form.Item
              name="type"
              label="Type"
            >
              <Select 
               options={types}
               style={{width: 240}}
              />
            </Form.Item>
            <Form.Item
              name="data"
              label="Data"
            >
              <Select 
                options={types}
                style={{width: 240}}
              />
            </Form.Item>

            <div
              style={{marginLeft: "auto"}}
            >
              <Button
                style={{
                  display: "inline-block",
                  marginRight: 20
              }}
              >Reset</Button>

              <Form.Item
                style={{display: "inline-block"}}
              >
                <Button type="primary">Submit</Button>
              </Form.Item>
            </div>
          
          </Form>
      </div>
    )
};
export default ConditionForm;