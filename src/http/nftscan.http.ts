import axios from 'axios';
import { NftscanError, NsError } from '@/types/nftscan-error';
import { NftscanConfig } from '@/types/nftscan-type';
import { isEmpty } from '@/util/common.util';
import NftscanConst from '@/util/nftscan.const';

/**
 * NFTScan's api url
 */
export class NftscanApi {
  static assets = {
    accountOwn: '/v2/account/own/',
    assetsBatch: '/v2/assets/batch',
  };
}

/**
 * Configure the axios interceptor
 * @param nftscanConfig NFTScan SDK Initialization parameters
 */
export function initHttpConfig(nftscanConfig: NftscanConfig) {
  axios.interceptors.request.use(
    (config) => {
      return {
        ...config,
        baseURL: NftscanConst.apiDomain,
        headers: { ...config.headers, 'X-API-KEY': nftscanConfig.apiKey },
      };
    },
    (error) => {
      return Promise.reject(new NftscanError(NsError.REQUEST_ERROR, error.message));
    },
  );

  axios.interceptors.response.use(
    (response) => {
      if (response.status !== 200) {
        return Promise.reject(new NftscanError(response.status, response.statusText));
      }

      if (isEmpty(response.data)) {
        return Promise.reject(new NftscanError(NsError.RESPONSE_DATA_EMPTY));
      }

      const { code, msg, data } = response.data;
      if (code !== 200) {
        return Promise.reject(new NftscanError(code, msg));
      }

      if (isEmpty(data)) {
        return Promise.reject(new NftscanError(NsError.NFTSCAN_DATA_EMPTY));
      }

      return data;
    },
    (error) => {
      return Promise.reject(new NftscanError(error.code, error.message));
    },
  );
}

/**
 * NFTScan's wrapper function of send get http request
 * @param nftscanConfig NFTScan SDK Initialization parameters
 * @param url api url
 * @param data post data
 * @returns Promise
 */
export function nftscanGet<T, V>(nftscanConfig: NftscanConfig, url: string, data?: T): Promise<V> {
  const { apiKey } = nftscanConfig;
  if (isEmpty(apiKey)) {
    return Promise.reject(new NftscanError(NsError.API_KEY));
  }
  return axios.get(url, {
    params: data,
  });
}

/**
 * NFTScan's wrapper function of send post http request
 * @param nftscanConfig NFTScan SDK Initialization parameters
 * @param url api url
 * @param data post data
 * @returns Promise
 */
export function nftscanPost<T, V>(nftscanConfig: NftscanConfig, url: string, data?: T): Promise<V> {
  const { apiKey } = nftscanConfig;
  if (isEmpty(apiKey)) {
    return Promise.reject(new NftscanError(NsError.API_KEY));
  }
  return axios.post(url, data);
}
