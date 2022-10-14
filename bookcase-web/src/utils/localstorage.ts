/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-09-30 15:22:20
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-10 14:15:31
 * @FilePath: /bookcase-web/src/utils/token.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const key = 'BOOKCASE_ACCESS_TOKEN';
export const getToken = () => localStorage.getItem(key);
export const setToken = (token: string) => localStorage.setItem(key, token);
export const removeToken = () => localStorage.removeItem(key);

export const key2 = 'username';
export const getUsername = () => localStorage.getItem(key2);
export const setUsername = (username: string) => localStorage.setItem(key2, username);
export const removeUsername = () => localStorage.removeItem(key2);

export const menu_key = 'HeaderMenuList';
export const getMenu = () => localStorage.getItem(menu_key);
export const setMenu= (menus:any) => localStorage.setItem(menu_key,menus);
export const removeMenu = () => localStorage.removeItem(menu_key);