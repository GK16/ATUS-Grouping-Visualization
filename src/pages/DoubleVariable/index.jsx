import { ConfigProvider } from 'antd';
import en_US from 'antd/locale/en_US';
import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button, notification } from 'antd';
import React, { useState } from 'react';
import ConditionForm from './components/ConditionForm';
import SquareMap from './components/SquareMap';
import atussum_1121 from '../../assets/atussum_1121.json';
import { ATTRIBUTES } from '../../constants';
import homePic from '../../assets/homepage.png';
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

const DoubleVariable = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [attrs, setAttrs] = useState([]);

  const calcu = (_data1, _data2) => {
    setAttrs([_data1, _data2]);

    let pattern1 = {};
    for (let ind in ATTRIBUTES) {
      if (ATTRIBUTES[ind].key === _data1) {
        pattern1 = ATTRIBUTES[ind];
        break;
      }
    }

    let pattern2 = {};
    for (let ind in ATTRIBUTES) {
      if (ATTRIBUTES[ind].key === _data2) {
        pattern2 = ATTRIBUTES[ind];
        break;
      }
    }

    console.log('pattern1', pattern1);
    let _yearStat = {};
    for (let ind in atussum_1121) {
      // stat
      const value1 = atussum_1121[ind][_data1] || '';
      const option1 = (pattern1?.entries || {})[value1];
      let name1 = option1?.name ? option1?.name : 'N/A';

      // yearStat
      const value2 = atussum_1121[ind][_data2] || '';
      const option2 = (pattern2?.entries || {})[value2];
      let name2 = option2?.name ? option2?.name : 'N/A';

      const key = name1 + name2 || 'N/A';
      if (!_yearStat.hasOwnProperty(key)) {
        _yearStat[key] = {
          // [_data2]: year,
          // [_data1]: name,
          data1: name2,
          data2: name1,
          value: 0,
        };
      }
      _yearStat[key].value++;
    }
    // console.log('_yearStat', _yearStat);

    const yearData = Object.keys(_yearStat).map((k) => _yearStat[k]);
    console.log('yearData', yearData);
    setData(yearData);

    setShow(true);
  };

  return (
    <ConfigProvider locale={en_US}>
      <div>
        <PageContainer
          header={{
            title: 'Double Variables Grouping',
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
                <SquareMap data={data} attrs={attrs} />
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
              <img src={homePic} width="450px" />
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

export default DoubleVariable;
