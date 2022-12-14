/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-09-30 15:22:20
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-02 18:12:09
 * @FilePath: /bookcase-web/src/utils/token.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface User{
    info: Array<{
        username: string;
        authority: number;
    }>;
}

export const key = 'BOOKCASE_ACCESS_TOKEN';
export const getToken = () => localStorage.getItem(key);
export const setToken = (token: string) => localStorage.setItem(key, token);
export const removeToken = () => localStorage.removeItem(key);

export const key2 = 'UserInfo';
export const getUserInfo = () => localStorage.getItem(key2);
export const setUserInfo = (info: User) => localStorage.setItem(key2, JSON.stringify(info));
export const removeUserInfo = () => localStorage.removeItem(key2);