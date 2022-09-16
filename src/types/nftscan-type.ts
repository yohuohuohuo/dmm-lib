/* eslint-disable no-shadow */

/**
 * The NFTScan SDK supported chains
 */
export enum Chain {
  ETH = 'ETH',
  BNB = 'BNB',
  MATIC = 'MATIC',
  GLMR = 'GLMR',
  Arbitrum = 'Arbitrum',
  Optimism = 'Optimism',
  Solana = 'Solana',
}

/**
 * The erc type of the NFT
 */
export enum ErcType {
  ERC_721 = 'erc721',
  ERC_1155 = 'erc1155',
}

/**
 * NFTScan SDK's config properties
 * To use our SDK, You need to register an account on NFTScan open platform({@link https://developer.nftscan.com/}) and get your API-KEY for making calls to API services.
 */
export interface NftscanConfig {
  /**
   * the api key of NFTScan
   */
  apiKey: string;

  chain: Chain;
}

/**
 * Base properties in NFTScan's HTTP request params
 */
export interface BaseNftscanRequestParam {
  /**
   * A cursor to retrieve the next page
   */
  cursor?: string;

  /**
   * Page size. Defaults to 20, capped at 1000
   */
  limit?: string;
}

/**
 * Base properties in NFTScan's HTTP response data
 */
export interface BaseNFTScanResponseData {
  /**
   * The next cursor to be supplied as a query param to retrieve the next page
   */
  next: string;

  /**
   * The total of the results matching the query
   */
  total: number;
}
