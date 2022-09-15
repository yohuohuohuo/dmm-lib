import { NftscanApi, nftscanGet, nftscanPost } from '@/http/nftscan.http';
import { AccountOwnParams, AssetsBatchItemParams, AssetsBatchParams } from '@/types/assets/evm/request-params';
import { AccountOwnResponse, Asset } from '@/types/assets/evm/response-data';
import { NftscanConfig } from '../types/nftscan-type';

export default class NftscanEvm {
  config: NftscanConfig;

  constructor(config: NftscanConfig) {
    this.config = config;
  }

  /**
   * Retrieve assets owned by an account. This endpoint returns a set of NFTs owned by an account address.
   * {@link https://docs.nftscan.com/nftscan/getAccountNftAssetsUsingGET}
   * @param accountAddress The address of the owner of the assets
   * @param data The query params {@link AccountOwnParams}
   * @returns Promise<{@link AccountOwnResponse}>
   */
  getAccountOwn(accountAddress: string, data?: AccountOwnParams): Promise<AccountOwnResponse> {
    return nftscanGet<AccountOwnParams, AccountOwnResponse>(
      this.config,
      `${NftscanApi.assets.accountOwn}${accountAddress}`,
      data,
    );
  }

  /**
   * Retrieve assets by list of contract address and token ID. This endpoint returns a set of NFTs according to the search list in the request body.
   * {@link https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST_1}
   * @param filterList List of contract address with token ID. Maximum size is 50.
   * @param showAttribute Whether to load attribute data of the assets. Default is false
   * @returns Promise<Array<{@link Asset}>>
   */
  queryAssetsBatch(filterList: Array<AssetsBatchItemParams>, showAttribute?: boolean): Promise<Array<Asset>> {
    const data: AssetsBatchParams = {
      contract_address_with_token_id_list: filterList,
      show_attribute: showAttribute,
    };
    return nftscanPost<AssetsBatchParams, Array<Asset>>(this.config, NftscanApi.assets.assetsBatch, data);
  }
}
