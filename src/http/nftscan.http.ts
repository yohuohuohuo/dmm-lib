/* eslint-disable no-console */
import axios from 'axios';
import { NftscanError, NsError } from '../types/nftscan-error';
import { NftscanConfig } from '../types/nftscan-type';
import { isEmpty } from '../util/common.util';
import NftscanConst from '../util/nftscan.const';

function apiKeyError() {
  const error = new NftscanError(NsError.API_KEY_ERROR, 'The property "apiKey" cannot be empty.');
  console.error(error);
  console.error('To use our APIs, You need to register an account on NFTScan open platform');
  console.error('NFTScan open platform ->', 'https://developer.nftscan.com/');
  return Promise.reject(error);
}

function apiChainError() {
  const error = new NftscanError(NsError.API_CHAIN_ERROR, 'The property "chain" is invalid');
  console.error(error);
  console.error('"chian" must be one of the following strings: [ETH, BNB, MATIC, GLMR, Arbitrum, Optimism, Solana]');
  return Promise.reject(error);
}

/**
 * Configure the axios interceptor
 * @param nftscanConfig NFTScan SDK Initialization parameters {@link NftscanConfig}
 */
export function initHttpConfig(nftscanConfig: NftscanConfig) {
  const { apiKey, chain } = nftscanConfig;

  if (isEmpty(apiKey)) {
    apiKeyError();
    return;
  }

  if (isEmpty(NftscanConst.BASE_URL[chain])) {
    apiChainError();
    return;
  }

  axios.interceptors.request.use(
    (config) => {
      return {
        ...config,
        baseURL: NftscanConst.BASE_URL[nftscanConfig.chain],
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
 * NFTScan SDK's wrapper function of send get http request
 * @param nftscanConfig NFTScan SDK Initialization parameters {@link NftscanConfig}
 * @param url The api url
 * @param params The axios get params
 * @returns Promise
 */
export function nftscanGet<T, V>(nftscanConfig: NftscanConfig, url: string, params?: T): Promise<V> {
  const { apiKey, chain } = nftscanConfig;
  if (isEmpty(apiKey)) {
    return apiKeyError();
  }

  if (isEmpty(NftscanConst.BASE_URL[chain])) {
    return apiChainError();
  }

  return axios.get(url, {
    params,
  });
}

/**
 * NFTScan SDK's wrapper function of send post http request
 * @param nftscanConfig NFTScan SDK Initialization parameters {@link NftscanConfig}
 * @param url The api url
 * @param data The axios post data
 * @returns Promise
 */
export function nftscanPost<T, V>(nftscanConfig: NftscanConfig, url: string, data?: T): Promise<V> {
  const { apiKey, chain } = nftscanConfig;
  if (isEmpty(apiKey)) {
    return apiKeyError();
  }

  if (isEmpty(NftscanConst.BASE_URL[chain])) {
    return apiChainError();
  }

  return axios.post(url, data);
}
