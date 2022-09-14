import { initHttpConfig } from '../http/nftscan.http';
import { NftscanConfig } from '../types/nftscan-type';
import NftscanEvm from './nftcan.evm';

export default class Nftscan {
  config: NftscanConfig;

  constructor(config: NftscanConfig) {
    this.config = config;
    initHttpConfig(this.config);
  }

  get evm(): NftscanEvm {
    return new NftscanEvm(this.config);
  }
}
