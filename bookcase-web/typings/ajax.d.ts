/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-11-24 17:38:37
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-29 14:39:30
 * @FilePath: /bookcase-web/typings/ajax.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare namespace Ajax {
  export interface Data<T = any> {
    status:string;
    msg:string;
    token:string;
    data: T;
  }

}
