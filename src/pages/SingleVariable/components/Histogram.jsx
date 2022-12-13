import { Column } from '@ant-design/plots';
import React from 'react';
import atussum_1121 from '../../../assets/atussum_1121.json'

const Histogram = () => {
    let stat = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    }
  
    for(let ind in atussum_1121){
      const day = atussum_1121[ind]["TUDIARYDAY"]
      stat[day]++
    }
  
    let data = []
    for(let k in stat){
      const d = {
        day: k,
        num: stat[k],
      }
      data.push(d)
    }

    console.log(data)
  
    const DemoColumn = () => {
      console.log(data)
      const config = {
        data,
        xField: 'day',
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
        meta: {
          day: {
            alias: '天',
          },
          num: {
            alias: '人数',
          },
        },
      };
      return <Column {...config} />;
    };
  
  
    return (<DemoColumn />);
  };
  
  export default Histogram;