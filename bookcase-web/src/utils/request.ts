/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-09-14 17:53:19
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-29 15:10:23
 * @FilePath: /bookcase-web/src/utils/request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios from 'axios';
import { message } from 'antd';
import { v4 as uuid } from 'uuid';
import apiList, { ApiUrl, ApiList } from '@/api';
import { getToken, removeToken } from '@/utils/localstorage';
import LoginConfirm from '@/utils/login-confirm';

// 获取api.ts里的配置
function getRequestParams(value: ApiUrl) {
  const { url } = value;
  return { url };
}

//Axios.defaults.baseURL = '/api';
Axios.defaults.timeout = 30 * 1000;

function generateAPI(apiList: ApiList) {
  const api:Record<string,any>= {};
  for (let key in apiList) {
    let value = apiList[key];
    const { url } = getRequestParams(value);

    Axios.interceptors.request.use(
      (config) => {
        const token = getToken();
        // eslint-disable-next-line no-param-reassign
        token && (config.headers!.BOOKCASE_ACCESS_TOKEN = token);
        return config;
      },
      (error) => {
        console.error(error);
        return Promise.reject(error);
      },
    );

    api[key] = async function Http<T>(params: AxiosRequestConfig, showError: boolean = true,): Promise<Ajax.Data<T>> {
      try {
        const { data }: AxiosResponse<Ajax.Data<T>> = await Axios({
          url,
          method: 'post',
          baseURL: '/api',
          data: {
            transIDO: uuid().replaceAll('-', ''),
            timeStamp: new Date().valueOf(),
            data: params || {},
          },
        });

        if (data.status == "success") {
          return data;
        } else if (data.status == "444") {
          message.error('无效Token,请重新登录!');
          removeToken();
          LoginConfirm();
        } else {
          showError && message.error(data?.status || '网络异常请稍后处理～');
        }
        return Promise.reject(data);
      } catch (error: any) {
        if (Axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else if (/timeout/i.test(error?.message)) {
          showError && message.error('请求超时！');
        } else {
          showError &&
            message.error(
              `${error?.response?.status ||
              error?.message ||
              '网络异常请稍后处理～'
              }`,
            );
        }
        console.error(error);
        return Promise.reject(error?.data);
      }
    };
  }
  return api;
}

const API = generateAPI(apiList);
export default API;