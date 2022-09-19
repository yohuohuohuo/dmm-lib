import { initHttpConfig } from '../http/nftscan.http';
import { NftscanConfig } from '../types/nftscan-type';
import NftscanEvmAsset from './evm/asset';

export default class Nftscan {
  config: NftscanConfig;

  constructor(config: NftscanConfig) {
    this.config = config;
    initHttpConfig(this.config);
  }

  get evmAsset(): NftscanEvmAsset {
    return new NftscanEvmAsset(this.config);
  }

  async test() {
    this.evmAsset
      .queryAssetsInBatches([{ contract_address: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', token_id: '1' }], true)
      .then((res) => {
        console.log('----Nftscan', res);
      })
      .catch((err) => {
        console.log('----Nftscan err', err);
      });
  }
}
