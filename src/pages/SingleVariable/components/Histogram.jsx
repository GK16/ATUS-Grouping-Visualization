import { Column } from '@ant-design/plots';
import React, { useState } from 'react';
import atussum_1121 from '../../../assets/atussum_1121.json';

const Histogram = ({ form, currAttr, stat }) => {
  const config = {
    xField: 'attr',
    yField: 'num',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return (
    <>
      {/* {currAttr} */}
      <Column
        {...config}
        data={stat}
        meta={{
          attr: {
            alias: 'Attribute',
          },
          num: {
            alias: 'Number',
          },
        }}
      />
    </>
  );
};

export default Histogram;
