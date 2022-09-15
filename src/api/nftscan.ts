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

  async test() {
    this.evm
      .queryAssetsBatch([{ contract_address: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', token_id: '1' }], true)
      .then((res) => {
        console.log('----Nftscan', res);
      })
      .catch((err) => {
        console.log('----Nftscan err', err);
      });
  }
}
