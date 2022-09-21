import { NftscanEvmConfig, NftscanSolanaConfig } from '../types/nftscan-type';

export default class BaseApi {
  config: NftscanEvmConfig | NftscanSolanaConfig;

  constructor(config: NftscanEvmConfig | NftscanSolanaConfig) {
    this.config = config;
  }
}
