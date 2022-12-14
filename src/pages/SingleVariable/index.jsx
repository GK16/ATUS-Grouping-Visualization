import { ConfigProvider } from 'antd';
import en_US from 'antd/locale/en_US';
import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React, { useState } from 'react';
import Histogram from './components/Histogram';
import ConditionForm from './components/ConditionForm';
import PieChart from './components/Pie';
import YearColumnn from './components/YearColumn';
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

const SingleVariable = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const [stat, setStat] = useState([]);
  const [yearStat, setYearStat] = useState([]);

  const calcu = (a) => {
    let pattern = {};
    for (let ind in ATTRIBUTES) {
      if (ATTRIBUTES[ind].key === a) {
        pattern = ATTRIBUTES[ind];
        break;
      }
    }
    console.log('pattern', pattern);
    let _stat = {};
    let _yearStat = {};
    for (let ind in atussum_1121) {
      // stat
      const value = atussum_1121[ind][a];
      const option = (pattern?.entries || {})[value];
      let name = option?.name ? option?.name : 'N/A';
      if (!_stat.hasOwnProperty(name)) {
        _stat[name] = 0;
      }
      _stat[name]++;

      // yearStat
      const year = atussum_1121[ind]['TUYEAR'] || '';
      const key = year + name || 'N/A';
      if (!_yearStat.hasOwnProperty(key)) {
        _yearStat[key] = {
          year,
          type: name,
          value: 0,
        };
      }
      _yearStat[key].value++;
    }
    // console.log('_stat', _stat);
    // console.log('_yearStat', _yearStat);

    const yearData = Object.keys(_yearStat).map((k) => _yearStat[k]);
    // console.log('yearData', yearData);
    setYearStat(yearData);

    let data = [];
    for (let k in _stat) {
      const d = {
        type: k,
        value: _stat[k],
      };
      data.push(d);
    }
    console.log('data', data);
    setStat(data);
    setShow(true);
  };

  return (
    <ConfigProvider locale={en_US}>
      <div>
        <PageContainer
          header={{
            title: 'Single Variable Grouping',
          }}
        ></PageContainer>

        <ConditionForm form={form} calcu={calcu} setShow={setShow} />

        {show ? (
          <div>
            <div
              style={{
                padding: 24,
                minHeight: 60,
                background: colorBgContainer,
                borderRadius: 8,
                margin: 36,
                marginTop: 0,
                marginBottom: 24,
                display: 'flex',
              }}
            >
              <div style={{ display: 'inline-block', flex: 1 }}>
                <Histogram form={form} stat={stat} />
              </div>
              <div
                style={{ display: 'inline-block', width: 400, marginLeft: 36 }}
              >
                <PieChart stat={stat} />
              </div>
            </div>
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
                <YearColumnn yearStat={yearStat || []} />
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

export default SingleVariable;
