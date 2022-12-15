import { ConfigProvider } from 'antd';
import en_US from 'antd/locale/en_US';
import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button, notification } from 'antd';
import React, { useState } from 'react';
import ConditionForm from './components/ConditionForm';
import SankeyChart from './components/Sankey';
import atussum_1121 from '../../assets/atussum_1121.json';
import { ATTRIBUTES } from '../../constants';
import placeHolder from '../../assets/placeHolder.png';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24,
    minHeight: 60,
    background: colorBgContainer,
    borderRadius: 8,
    margin: 36,
    marginTop: 0,
    marginBottom: 24,
    display: 'flex',
`;

const ThreeVariable = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [attrs, setAttrs] = useState([]);

  const calcu = (FieldsValues) => {
    // console.log('calcu:', FieldsValues);
    let [_data1, _data2, _data3, _data4, _data5, _data6] =
      Object.values(FieldsValues);
    let pattern1 = {};
    let pattern2 = {};
    let pattern3 = {};
    let pattern4 = {};
    let pattern5 = {};
    let pattern6 = {};
    for (let ind in ATTRIBUTES) {
      if (ATTRIBUTES[ind].key === _data1) {
        pattern1 = ATTRIBUTES[ind] || {};
        continue;
      }
      if (ATTRIBUTES[ind].key === _data2) {
        pattern2 = ATTRIBUTES[ind] || {};
        continue;
      }
      if (ATTRIBUTES[ind].key === _data3) {
        pattern3 = ATTRIBUTES[ind] || {};
        continue;
      }
      if (ATTRIBUTES[ind].key === _data4) {
        pattern4 = ATTRIBUTES[ind] || {};
        continue;
      }
      if (ATTRIBUTES[ind].key === _data5) {
        pattern5 = ATTRIBUTES[ind] || {};
        continue;
      }
      if (ATTRIBUTES[ind].key === _data6) {
        pattern6 = ATTRIBUTES[ind] || {};
        continue;
      }
    }
    // console.log('pattern', pattern1, pattern2, pattern3);
    let stat = {};
    for (let ind in atussum_1121) {
      const value_1 = (atussum_1121[ind] || {})[_data1] || 'N/A 1';
      const value_2 = (atussum_1121[ind] || {})[_data2] || 'N/A 2';
      const value_3 = (atussum_1121[ind] || {})[_data3] || 'N/A 3';
      const value_4 = (atussum_1121[ind] || {})[_data4] || 'N/A 4';
      const value_5 = (atussum_1121[ind] || {})[_data5] || 'N/A 5';
      const value_6 = (atussum_1121[ind] || {})[_data6] || 'N/A 6';

      const key = value_1 + value_2 + value_3 + value_4 + value_5 + value_6;

      if (!stat.hasOwnProperty(key)) {
        stat[key] = {
          [pattern1.label]: pattern1.entries[value_1]?.name || 'N/A 1',
          [pattern2.label]: pattern2.entries[value_2]?.name || 'N/A 2 ',
          [pattern3.label]: pattern3.entries[value_3]?.name || 'N/A 3',
          [pattern4.label]: pattern4.entries[value_4]?.name || 'N/A 4',
          [pattern5.label]: pattern5.entries[value_5]?.name || 'N/A 5',
          [pattern6.label]: pattern6.entries[value_6]?.name || 'N/A 6',
          value: 0,
        };
      }
      stat[key].value++;
    }
    const resData = Object.keys(stat).map((k) => stat[k]);
    console.log('resData', resData);
    setAttrs([
      pattern1.label,
      pattern2.label,
      pattern3.label,
      pattern4.label,
      pattern5.label,
      pattern6.label,
    ]);
    setData(resData);
    setShow(true);
  };

  return (
    <ConfigProvider locale={en_US}>
      <div>
        <PageContainer
          header={{
            title: 'Multiple Variables Grouping',
          }}
        ></PageContainer>

        <ConditionForm form={form} calcu={calcu} setShow={setShow} />

        {show ? (
          <div>
            <div
              style={{
                padding: 24,
                height: 450,
                background: colorBgContainer,
                borderRadius: 8,
                margin: 36,
                marginTop: 0,
                marginBottom: 24,
                display: 'flex',
              }}
            >
              <div style={{ flex: 1 }}>
                <SankeyChart data={data} attrs={attrs} />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              padding: 24,
              height: 450,
              // background: colorBgContainer,
              borderRadius: 8,
              margin: 36,
              marginTop: 0,
              marginBottom: 24,
              display: 'flex',
            }}
          >
            <div style={{ margin: '20px auto' }}>
              <img src={placeHolder} width="600px" />
              <div
                style={{
                  textAlign: 'center',
                  margin: '40px auto',
                  fontSize: '20px',
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                Explore ATUS data with me !
              </div>
            </div>
          </div>
        )}
      </div>
    </ConfigProvider>
  );
};

export default ThreeVariable;
