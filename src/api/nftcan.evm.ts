import { NftscanConfig } from '../types/type';

// eslint-disable-next-line import/prefer-default-export
export class NftscanEvm {
  config: NftscanConfig;

  constructor(config: NftscanConfig) {
    this.config = config;
  }

  getAccountOwnNft() {
    return this.config;
  }
}
