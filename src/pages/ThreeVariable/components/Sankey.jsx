import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Sankey } from '@ant-design/plots';

const SankeyChart = ({ data, attrs }) => {
  //   console.log('attrs', attrs);
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     asyncFetch();
  //   }, []);

  //   const asyncFetch = () => {
  //     fetch(
  //       'https://gw.alipayobjects.com/os/antfincdn/nokcOpy6fF/draggable-sankey.json',
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setData(json);
  //         console.log('json', json);
  //       })
  //       .catch((error) => {
  //         console.log('fetch data failed', error);
  //       });
  //   };
  /**
   * @file Parallel sets are like parallel coordinates, but for categorical dimensions.
   *
   * Parallel Sets: Visual Analysis of Categorical Data. See more in https://kosara.net/publications/Bendix-InfoVis-2005.html
   */
  const sankeyData = [];
  const keys = ['Survived', 'Sex', 'Age', 'Class'];
  data.forEach((d) => {
    attrs.reduce((a, b) => {
      if (a && b) {
        sankeyData.push({
          source: d[a],
          target: d[b],
          value: d.value,
          path: `${d[attrs[0]]} -> ${d[attrs[1]]} -> ${d[attrs[2]]} -> ${
            d[attrs[3]]
          } -> ${d[attrs[4]]} -> ${d[attrs[5]]}`,
        });
      }

      return b;
    });
  });
  const config = {
    data: sankeyData,
    sourceField: 'source',
    targetField: 'target',
    weightField: 'value',
    nodeWidthRatio: 0.01,
    nodePaddingRatio: 0.03,
    nodeDraggable: true,
    rawFields: ['path'],
    tooltip: {
      fields: ['path', 'value'],
      formatter: ({ path, value }) => {
        return {
          name: path,
          value: value,
        };
      },
    },
  };

  return <Sankey {...config} />;
};

export default SankeyChart;
