import React, { useState, useEffect } from 'react';
import { Heatmap } from '@ant-design/plots';
import { ATTRIBUTES } from '../../../constants';

const SquareMap = ({ data, attrs }) => {
  const config = {
    shape: 'circle',
    color: ['#dddddd', '#9ec8e0', '#5fa4cd', '#2e7ab6', '#114d90'],
    label: {
      style: {
        fill: '#fff',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, 1)',
      },
    },
  };

  return (
    <>
      {attrs.length > 1 && (
        <Heatmap
          {...config}
          data={data || []}
          xField="data1"
          yField="data2"
          colorField="value"
          sizeField="value"
        />
      )}
    </>
  );
};

export default SquareMap;
