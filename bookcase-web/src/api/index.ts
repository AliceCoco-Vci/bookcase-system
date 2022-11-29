/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-09-14 17:51:31
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-29 13:58:13
 * @FilePath: /bookcase-web/src/api/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import login from './login';
import book from './book';

// interface ApiList{
//   [key:string]:{
//     url:string;
//   }
// }

export interface ApiUrl {
  url: string;
  method?: string;
}

export type ApiList = Record<string, ApiUrl>

const apiList: ApiList = {
  ...login,
  ...book,
};

export default apiList;