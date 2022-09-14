/* eslint-disable no-shadow */
export interface NftscanConfig {
  apiKey: string;
}

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

export enum ErcType {
  ERC_721 = 'erc721',
  ERC_1155 = 'erc1155',
}
