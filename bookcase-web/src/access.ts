/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-11 13:25:33
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-11 13:49:24
 * @FilePath: /bookcase-web/src/access.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function access(initialState: any) {
    const { menuItem } = initialState;
    return {
        bookcase:menuItem.includes(''),
    };
}