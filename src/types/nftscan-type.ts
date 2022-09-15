/* eslint-disable no-shadow */

/**
 * NFTScan's config properties
 */
export interface NftscanConfig {
  /**
   * the api key of NFTScan(https://developer.nftscan.com/)
   */
  apiKey: string;
}

/**
 * Base properties in NFTScan's HTTP request data
 */
export interface NftscanRequestData {
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
export interface NFTScanResponseData {
  /**
   * The next cursor to be supplied as a query param to retrieve the next page
   */
  next: string;

  /**
   * The total of the results matching the query
   */
  total: number;
}

/**
 * The erc type of the NFT
 */
export enum ErcType {
  ERC_721 = 'erc721',
  ERC_1155 = 'erc1155',
}
