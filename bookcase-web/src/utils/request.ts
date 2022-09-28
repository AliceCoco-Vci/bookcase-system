import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios from 'axios';
import { message } from 'antd';
import { v4 as uuid } from 'uuid';
import apiList from '@/api';

// 获取api.ts里的配置
function getRequestParams(value: any) {
  if (typeof value === 'string') {
    return {
      url: value,
      method: 'get',
    };
  } else if (typeof value === 'object') {
    const { url, method = 'post', baseURL } = value;
    return {
      url,
      method,
      baseURL,
    };
  } else {
    console.error('getRequestParams: 传参有误');
  }
}

Axios.defaults.baseURL = '/api';
Axios.defaults.timeout = 30 * 1000;

function generateAPI(apiList: any) {
  const api = {};
  for (let key in apiList) {
    let value = apiList[key];
    const { url, method, baseURL } =
      getRequestParams(value);

    Axios.interceptors.request.use(
      (config) => {
        //TODO 可以处理token
        return config;
      },
      (error) => {
        console.error(error);
        return Promise.reject(error);
      },
    );

    api[key] = async function Http<T>(
      params: AxiosRequestConfig,
      showError: boolean = true,
    ): Promise<Ajax.Data<T>> {
      try {
        const { data }: AxiosResponse<Ajax.Data<T>> = await Axios({
          url,
          method,
          baseURL,
          data: {
            transIDO: uuid().replaceAll('-', ''),
            timeStamp: new Date().valueOf(),
            data: params || {},
          },
        });

        if (data.status=="success") {
          return data;
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

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
let base = '';
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  });
}
export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${base}${url}`
  });
}