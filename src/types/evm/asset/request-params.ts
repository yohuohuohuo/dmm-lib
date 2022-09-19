import { BaseNftscanRequestParam, ErcType } from '../../nftscan-type';

export interface CommonAssetParams extends BaseNftscanRequestParam {
  /**
   * Whether to load attribute data of the assets. Default is false
   */
  show_attribute?: boolean;
}

/**
 * The request parameters of api 'getAccountOwn'
 */
export interface AccountOwnParams extends CommonAssetParams {
  /**
   * Can be erc721 or erc1155. Required if contract_address is null
   */
  erc_type?: ErcType;

  /**
   * The NFT contract address for the assets
   */
  contract_address?: string;
}

/**
 * The request parameters of api 'getAccountMint'
 */
export interface AccountMintParams extends CommonAssetParams {
  /**
   * The NFT contract address for the assets
   */
  contract_address?: string;
}

/**
 * The parameters of contract_address_with_token_id_list
 */
export interface BatchQueryAssetsListItemParams {
  /**
   * The contract address
   */
  contract_address: string;

  /**
   * The token ID
   */
  token_id: string;
}

/**
 * The request parameters of api 'queryAssetsByBatch'
 */
export interface BatchQueryAssetsParams {
  /**
   * List of contract address with token ID. Maximum size is 50.
   */
  contract_address_with_token_id_list: Array<BatchQueryAssetsListItemParams>;

  /**
   * Whether to load attribute data of the assets. Default is false
   */
  show_attribute?: boolean;
}

/**
 * The request parameters of api 'queryAssetsByFilters'
 */
export interface QueryAssetsByFiltersParams extends CommonAssetParams {
  /**
   * Filter of end block number
   */
  block_number_end: number;

  /**
   * Filter of start block number
   */
  block_number_start: number;

  /**
   * List of contract address. Maximum size is 50.
   */
  contract_address_list: Array<string>;
}
