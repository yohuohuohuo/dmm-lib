import { initHttpConfig } from '../../http/nftscan.http';
import { NftscanConfig } from '../../types/nftscan-type';
import BaseApi from '../base-api';
import NftscanSolanaAsset from './asset';

/**
 * This class is the main entry point into NFTScan's Solana APIs and separates functionality into different object.
 * To use a different chain or API key, you should create a new instance of {@link NftscanSolana}
 *
 * The NFTScan API for Solana helps developers build new experiences retrieving NFTs and data analysis on the solana
 * blockchain. We provide a set of endpoints that enable you to fetch NFT assets as well as transactions, collections,
 * marketplace statistics and more.
 *
 * To use our APIs, You need to register an account on NFTScan open platform OpenAPI Platform({@link https://developer.nftscan.com/})
 * and get your API key for NFTScan SDK initialize config.
 */
export default class NftscanSolana extends BaseApi {
  constructor(config: NftscanConfig) {
    super(config);
    initHttpConfig(config);
  }

  /**
   * The `asset` object contains methods for NFTScan's Solana asset API.
   */
  get asset(): NftscanSolanaAsset {
    return new NftscanSolanaAsset(this.config);
  }
}
