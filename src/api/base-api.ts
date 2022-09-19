import { NftscanConfig } from '../types/nftscan-type';

export default class BaseApi {
  config: NftscanConfig;

  constructor(config: NftscanConfig) {
    this.config = config;
  }
}
