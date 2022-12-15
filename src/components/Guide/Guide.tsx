import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';
import homePic from '../../assets/homepage.png';

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          Welcome to <strong>Population Grouping Platform</strong> ！
        </Typography.Title>
      </Row>
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
    </Layout>
  );
};

export default Guide;
