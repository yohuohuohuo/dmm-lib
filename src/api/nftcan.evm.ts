import { NftscanApi, nftscanGet } from '@/http/nftscan.http';
import { AccountOwnParams } from '@/types/assets/evm/request-params';
import { NftscanConfig } from '../types/nftscan-type';

export default class NftscanEvm {
  config: NftscanConfig;

  constructor(config: NftscanConfig) {
    this.config = config;
  }

  async getAccountOwn(accountAddress: string, data?: AccountOwnParams) {
    return nftscanGet(`${NftscanApi.assets.accountOwn}${accountAddress}`, data, this.config);
  }
}
