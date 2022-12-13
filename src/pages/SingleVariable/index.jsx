import { PageContainer } from '@ant-design/pro-components';
import { theme, Select, Form, Button } from 'antd';
import React from 'react';
import Histogram from './components/Histogram';
import ConditionForm from './components/ConditionForm';
import Card from '../../components/Card'

const SingleVariable = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <PageContainer
      header={{
        title: 'Single Variable Grouping',
      }}
      >
      </PageContainer>

      <ConditionForm />
  
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
        <Histogram />
      </div>
    </div>
  );
};

export default SingleVariable;
