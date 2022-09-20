import { BaseNsPaginationReqParam } from '../../nftscan-type';

/**
 * The request parameters of Solana API 'getAssetsByAccount'
 */
export interface AssetParams extends BaseNsPaginationReqParam {
  /**
   * The NFT collection for the assets
   */
  collection?: string;
}
