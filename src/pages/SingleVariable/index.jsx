import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React, { useState } from 'react';
import Histogram from './components/Histogram';
import ConditionForm from './components/ConditionForm';
import Card from '../../components/Card';
import atussum_1121 from '../../assets/atussum_1121.json';

const SingleVariable = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();

  const [currAttr, setCurrAttr] = useState(null);
  const [stat, setStat] = useState([]);

  const calcu = (a) => {
    let _stat = {};
    console.log('a', a);
    for (let ind in atussum_1121) {
      const _attr = atussum_1121[ind][a];
      if (!_stat.hasOwnProperty(_attr)) {
        _stat[_attr] = 0;
      }
      _stat[_attr]++;
      // console.log('!!!!', _stat);
    }
    console.log('!!!!', _stat);
    let data = [];
    for (let k in _stat) {
      const d = {
        attr: k,
        num: _stat[k],
      };
      data.push(d);
    }
    setStat(data);
  };

  return (
    <div>
      <PageContainer
        header={{
          title: 'Single Variable Grouping',
        }}
      ></PageContainer>

      <ConditionForm form={form} setCurrAttr={setCurrAttr} calcu={calcu} />

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
        <Histogram form={form} currAttr={currAttr} stat={stat} />
      </div>
    </div>
  );
};

export default SingleVariable;
