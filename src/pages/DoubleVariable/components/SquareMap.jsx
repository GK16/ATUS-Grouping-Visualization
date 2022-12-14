import React, { useState, useEffect } from 'react';
import { Heatmap } from '@ant-design/plots';
import { ATTRIBUTES } from '../../../constants';

const SquareMap = ({ data, attrs }) => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     asyncFetch();
  //   }, []);

  //   const asyncFetch = () => {
  //     fetch(
  //       'https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json',
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setData(json);
  //         console.log(json);
  //       })
  //       .catch((error) => {
  //         console.log('fetch data failed', error);
  //       });
  //   };

  const [xField, setXField] = useState(null);
  const [yField, setYField] = useState(null);

  const processField = () => {
    if (!attrs) return;

    let option1 = {};
    let option2 = {};

    for (let ind in ATTRIBUTES) {
      if (ATTRIBUTES[ind].key === attrs[0]) {
        option1.key = ATTRIBUTES[ind].key;
        option1.num = Object.keys(ATTRIBUTES[ind]?.entries || {}).length || 1;
      }
      if (ATTRIBUTES[ind].key === attrs[1]) {
        option2.key = ATTRIBUTES[ind].key;
        option2.num = Object.keys(ATTRIBUTES[ind]?.entries || {}).length || 1;
      }
    }

    if (option1.num >= option2.num) {
      setXField(option2.key);
      setYField(option1.key);
      return;
    }
    setXField(option1.key);
    setYField(option2.key);
  };

  useEffect(() => {
    processField();
    console.log('attrs changed', attrs);
  }, [attrs]);

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
