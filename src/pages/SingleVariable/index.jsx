import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React, { useState } from 'react';
import Histogram from './components/Histogram';
import ConditionForm from './components/ConditionForm';
import PieChart from './components/Pie';
import Card from '../../components/Card';
import atussum_1121 from '../../assets/atussum_1121.json';
import { ATTRIBUTES } from '../../constants';

const SingleVariable = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();

  const [currAttr, setCurrAttr] = useState(null);
  const [stat, setStat] = useState([]);

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
    for (let ind in atussum_1121) {
      const value = atussum_1121[ind][a];
      const option = (pattern?.entries || {})[value];
      let name = option?.name ? option?.name : 'N/A';
      if (!_stat.hasOwnProperty(name)) {
        _stat[name] = 0;
      }
      _stat[name]++;
    }

    console.log('_stat', _stat);
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
  };

  return (
    <div>
      <PageContainer
        header={{
          title: 'Single Variable Grouping',
        }}
      ></PageContainer>

      <ConditionForm form={form} calcu={calcu} />

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
        <div style={{ display: 'inline-block', width: 400, marginLeft: 36 }}>
          <PieChart stat={stat} />
        </div>
      </div>
    </div>
  );
};

export default SingleVariable;
