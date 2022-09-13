import axios from 'axios';
import { NftscanConfig } from '../types/type';

// eslint-disable-next-line import/prefer-default-export
export class NftscanEvm {
  config: NftscanConfig;

  constructor(config: NftscanConfig) {
    this.config = config;
  }

  async getAccountOwnNft() {
    const result = await axios.get(
      'https://restapi.nftscan.com/api/v2/account/own/0xE6d884c5195Aa6187b554E542DEaDcF0C91a431a?erc_type=erc721',
      { headers: { 'X-API-KEY': this.config.apiKey } },
    );

    console.log('=getAccountOwnNft=', result);

    return result;
  }
}
