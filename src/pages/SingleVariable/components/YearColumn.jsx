import { Column, G2 } from '@ant-design/plots';
import React from 'react';

const YearColumn = ({ yearStat }) => {
  G2.registerInteraction('element-link', {
    start: [
      {
        trigger: 'interval:mouseenter',
        action: 'element-link-by-color:link',
      },
    ],
    end: [
      {
        trigger: 'interval:mouseleave',
        action: 'element-link-by-color:unlink',
      },
    ],
  });
  const config = {
    locale: 'en-US',
    autoFit: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    isPercent: true,
    isStack: true,
    meta: {
      value: {
        min: 0,
        max: 1,
      },
    },
    label: {
      position: 'middle',
      content: (item) => {
        return `${(item.value * 100).toFixed(2)}%`;
      },
      style: {
        fill: '#fff',
      },
    },
    tooltip: false,
    interactions: [
      {
        type: 'element-highlight-by-color',
      },
      {
        type: 'element-link',
      },
    ],
  };

  return <Column {...config} data={yearStat} />;
};

export default YearColumn;
