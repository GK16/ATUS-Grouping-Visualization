import { Bar } from '@ant-design/plots';
import React, { useState } from 'react';

const Histogram = ({ form, currAttr, stat }) => {
  const config = {
    xField: 'value',
    yField: 'type',
    legend: {
      position: 'top-left',
    },
    barBackground: {
      style: {
        fill: 'rgba(0,0,0,0.1)',
      },
    },
    maxBarWidth: 40,
    locale: 'en-US',
  };

  return (
    <>
      {/* {currAttr} */}
      <Bar
        {...config}
        data={stat}
        meta={{
          type: {
            alias: 'Attribute',
          },
          value: {
            alias: 'Number',
          },
        }}
      />
    </>
  );
};

export default Histogram;
