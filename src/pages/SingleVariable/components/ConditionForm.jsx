import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React, { useState } from 'react';
import {ATTRIBUTES} from "../../../constants"

const ConditionForm = ({form}) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const [typeOptions, setTypeOptions] = useState([]);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onTypeChange = (_type) => {
      let types = []
      for(let i in ATTRIBUTES){
        if (ATTRIBUTES[i].type == _type) 
        {
          types.push({
            value: ATTRIBUTES[i].key, label: ATTRIBUTES[i].label
          }
        )}
      }
      setTypeOptions(types)
    }


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
               options={[{value: "numeric", label: "Numeric"}, {value: "categorical", label: "Categorical"}]}
               style={{width: 120}}
               onChange={onTypeChange}
              />
            </Form.Item>
            <Form.Item
              name="data"
              label="Data"
            >
              <Select 
                options={typeOptions}
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