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
 * The sort type
 */
export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export enum RangeType {
  m15 = '15m',
  m30 = '30m',
  h1 = '1h',
  h4 = '4h',
  h6 = '6h',
  h12 = '12h',
  d1 = '1d',
  d3 = '3d',
  d7 = '7d',
  d30 = '30d',
  d90 = '90d',
  mth1 = '1mth',
  mth3 = '3mth',
  y1 = '1y',
  all = 'all',
}

/**
 * NFTScan SDK's common object
 */
export interface NsObject {
  [key: string]: unknown;
}

/**
 * NFTScan SDK's config properties
 * To use our SDK, You need to register an account on NFTScan open platform({@link https://developer.nftscan.com/}) and get your API-KEY for making calls to API services.
 */
export interface NftscanConfig {
  /**
   * The api key of NFTScan
   */
  apiKey: string;

  /**
   * The name of the chain you will be requesting
   */
  chain: Chain;
}

/**
 * Base pagination properties in NFTScan's HTTP request params
 */
export interface BaseNsPaginationReqParam {
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
 * Base pagination properties in NFTScan's HTTP response data
 */
export interface BaseNsPaginationResData {
  /**
   * The next cursor to be supplied as a query param to retrieve the next page
   */
  next: string;

  /**
   * The total of the results matching the query
   */
  total: number;
}
