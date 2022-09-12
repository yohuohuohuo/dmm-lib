import { NftscanConfig } from '@/types/type';
import { NftscanEvm } from './nftcan.evm';

export default class Nftscan {
  config: NftscanConfig;

  evm: NftscanEvm;

  constructor(config: NftscanConfig) {
    this.config = config;
    this.evm = new NftscanEvm(config);
  }

  getEvmKey() {
    return this.evm.config.apiKey;
  }

  static getCount() {
    return 4;
  }
}
