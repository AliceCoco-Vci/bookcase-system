/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-11-01 11:56:14
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-29 17:05:21
 * @FilePath: /bookcase-web/src/pages/home/page1/page1.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Calendar from '@/components/Calendar/Calendar';
import styles from './index.less';

const Page1 = () => {
  return (
    <div className={styles.container}>
      <Calendar />
    </div>
  );
}

export default Page1;