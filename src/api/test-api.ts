/* eslint-disable no-console */
import { Chain } from '../types/nftscan-type';
import NftscanEvm from './evm/nftscan-evm';

export default class TestApi {
  static evm = new NftscanEvm({ apiKey: '', chain: 'ETH' as Chain });

  static run() {
    this.evm.asset
      .queryAssetsInBatches([{ contract_address: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', token_id: '1' }], true)
      .then((res) => {
        console.log('NFTScan suc---->', res);
      })
      .catch((err) => {
        console.log('NFTScan err---->', err);
      });
  }
}
