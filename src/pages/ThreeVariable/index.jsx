import { ConfigProvider } from 'antd';
import en_US from 'antd/locale/en_US';
import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button, notification } from 'antd';
import React, { useState } from 'react';
import ConditionForm from './components/ConditionForm';
import ScatterPlot from './components/ScatterPlot';
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

const ThreeVariable = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [attrs, setAttrs] = useState([]);

  const calcu = (_data1, _data2, _data3) => {
    console.log('calcu:', _data1, _data2, _data3);

    let pattern1 = {};
    let pattern2 = {};
    let pattern3 = {};
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
    }

    console.log('pattern', pattern1, pattern2, pattern3);

    let processedData = [];

    for (let ind in atussum_1121) {
      console.log('atussum_1121[ind]', atussum_1121[ind]);

      let item = {};
      const value_1 = (atussum_1121[ind] || {})[_data1] || 0;
      const value_2 = (atussum_1121[ind] || {})[_data2] || 0;
      const value_3 = (atussum_1121[ind] || {})[_data3] || 'N/A';
      console.log('value', value_1, value_2, value_3);
      console.log('label', pattern1.label, pattern2.label, pattern3.label);

      item[pattern1.label] = value_1;
      item[pattern2.label] = value_2;
      item[pattern3.label] = value_3;

      console.log('item', item);

      if (ind > 3) break;
    }

    // setAttrs([_data1, _data2]);

    // let pattern1 = {};
    // for (let ind in ATTRIBUTES) {
    //   if (ATTRIBUTES[ind].key === _data1) {
    //     pattern1 = ATTRIBUTES[ind];
    //     break;
    //   }
    // }

    // let pattern2 = {};
    // for (let ind in ATTRIBUTES) {
    //   if (ATTRIBUTES[ind].key === _data2) {
    //     pattern2 = ATTRIBUTES[ind];
    //     break;
    //   }
    // }

    // console.log('pattern1', pattern1);
    // let _yearStat = {};
    // for (let ind in atussum_1121) {
    //   // stat
    //   const value1 = atussum_1121[ind][_data1] || '';
    //   const option1 = (pattern1?.entries || {})[value1];
    //   let name1 = option1?.name ? option1?.name : 'N/A';

    //   // yearStat
    //   const value2 = atussum_1121[ind][_data2] || '';
    //   const option2 = (pattern2?.entries || {})[value2];
    //   let name2 = option2?.name ? option2?.name : 'N/A';

    //   const key = name1 + name2 || 'N/A';
    //   if (!_yearStat.hasOwnProperty(key)) {
    //     _yearStat[key] = {
    //       // [_data2]: year,
    //       // [_data1]: name,
    //       data1: name2,
    //       data2: name1,
    //       value: 0,
    //     };
    //   }
    //   _yearStat[key].value++;
    // }
    // // console.log('_yearStat', _yearStat);

    // const yearData = Object.keys(_yearStat).map((k) => _yearStat[k]);
    // console.log('yearData', yearData);
    // setData(yearData);

    // setShow(true);
  };

  return (
    <ConfigProvider locale={en_US}>
      <div>
        <PageContainer
          header={{
            title: 'Three Variables Grouping',
          }}
        ></PageContainer>

        <ConditionForm form={form} calcu={calcu} setShow={setShow} />

        {true ? (
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
                <ScatterPlot data={data} attrs={attrs} />
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

export default ThreeVariable;
