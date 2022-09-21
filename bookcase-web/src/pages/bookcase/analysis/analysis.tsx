import { useState, useEffect } from 'react';
import { Column, G2 } from '@ant-design/plots';
import { deepMix } from '@antv/util';

const AnalysisPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const theme = G2.getTheme('default');

  // const data=[
  //   {
  //     "日期":"2022-8-29",
  //     "总支出":1000,
  //   },
  //   {
  //     "日期":"2022-8-30",
  //     "总支出":2000,
  //   },
  // ];

  const config = {
    data,
    xField: '城市',
    yField: '销售额',
    // xField: '日期',
    // yField: '总支出',
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    appendPadding: 10,
    theme: deepMix({}, theme, {
      components: {
        scrollbar: {
          // 默认样式
          default: {
            style: {
              trackColor: '#85a5ff',
              thumbColor: '#597ef7',
            },
          },
          // hover 时，可以设置滑块样式
          hover: {
            style: {
              thumbColor: '#d6e4ff',
            },
          },
        },
      },
    }),
    scrollbar: {
      type: 'horizontal',
    },
  };

  return <Column {...config} />;

};

export default AnalysisPage;