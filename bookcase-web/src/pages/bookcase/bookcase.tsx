import { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/plots';
import img from '@/assets/book.png'

const WordCloudchart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    imageMask: img,
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
    },
  };

  return <WordCloud {...config} />;
}

const BookcasePage = () => {
  return <WordCloudchart />
};

export default BookcasePage;
