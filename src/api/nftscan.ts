import { NftscanConfig } from '@/types/type';
import { NftscanEvm } from './nftcan.evm';

export default class Nftscan {
  config: NftscanConfig;

  evm: NftscanEvm;

  constructor(config: NftscanConfig) {
    console.log('init:', config);
    this.config = config;
    this.evm = new NftscanEvm(config);
  }
}
