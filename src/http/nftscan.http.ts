import axios from 'axios';
import { NftscanConfig } from '@/types/nftscan-type';
import { isEmpty } from '@/util/common.util';
import { NftscanError, NsError } from '@/types/nftscan-error';
import NftscanConst from '@/util/nftscan.const';

export class NftscanApi {
  static assets = {
    accountOwn: '/v2/account/own/',
  };
}

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

export function nftscanGet(url: string, data: unknown, nftscanConfig: NftscanConfig) {
  const { apiKey } = nftscanConfig;
  if (isEmpty(apiKey)) {
    return Promise.reject(new NftscanError(NsError.API_KEY));
  }
  return axios.get(url, {
    params: data,
  });
}
