/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-08-25 09:33:51
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-11 10:42:35
 * @FilePath: /bookcase-web/src/pages/bookcase/bookcase.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/plots';
import img from '@/assets/book.png';
import styles from './index.less';

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
  return (
    <div className={styles.container}>
      <div className={styles.imgbox}>
        <WordCloudchart />
      </div>
    </div>
  )
};

export default BookcasePage;
