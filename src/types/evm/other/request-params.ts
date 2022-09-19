import { BaseNsPaginationReqParam } from '../../nftscan-type';

/**
 * The request parameters of api 'getAssetOwnerByContractAndTokenId'
 */
export interface QueryAssetOwnerParams extends BaseNsPaginationReqParam {
  /**
   * The NFT contract address
   */
  contract_address: string;

  /**
   * The NFT token ID. Can be in Hex or in Number
   */
  token_id: string;
}
