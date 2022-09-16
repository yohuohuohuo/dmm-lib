import { NftscanRequestData, ErcType } from '../../nftscan-type';

/**
 * The parameters of api 'getAccountOwn'
 */
export interface AccountOwnParams extends NftscanRequestData {
  /**
   * Can be erc721 or erc1155. Required if contract_address is null
   */
  erc_type?: ErcType;
  /**
   * The NFT contract address for the assets
   */
  contract_address?: string;
  /**
   * Whether to load attribute data of the assets. Default is false
   */
  show_attribute?: boolean;
}

/**
 * The parameters of contract_address_with_token_id_list
 */
export interface AssetsBatchItemParams {
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
 * The parameters of api 'queryAssetsBatch'
 */
export interface AssetsBatchParams {
  /**
   * List of contract address with token ID. Maximum size is 50.
   */
  contract_address_with_token_id_list: Array<AssetsBatchItemParams>;
  /**
   * Whether to load attribute data of the assets. Default is false
   */
  show_attribute?: boolean;
}
