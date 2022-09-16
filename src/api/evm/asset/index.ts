import { nftscanGet, nftscanPost } from '../../../http/nftscan.http';
import {
  AccountMintParams,
  AccountOwnAllParams,
  AccountOwnParams,
  BatchQueryAssetsListItemParams,
  BatchQueryAssetsParams,
  CommonAssetParams,
  QueryAssetsByFiltersParams,
} from '../../../types/evm/asset/request-params';
import { AccountOwnAllResponse, CommonAssetResponse, Asset } from '../../../types/evm/asset/response-data';
import { invalidParam, missingParam, NftscanError, NsError } from '../../../types/nftscan-error';
import { NftscanConfig } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';

/**
 * Asset related API
 */
export default class NftscanEvmAsset {
  config: NftscanConfig;

  constructor(config: NftscanConfig) {
    this.config = config;
  }

  /**
   * Retrieve assets owned by an account.
   * - This endpoint returns a set of NFTs owned by an account address.
   * - details: {@link https://docs.nftscan.com/nftscan/getAccountNftAssetsUsingGET}
   * @param accountAddress The address of the owner of the assets
   * @param data The query params {@link AccountOwnParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAccountOwn(accountAddress: string, data: AccountOwnParams): Promise<CommonAssetResponse> {
    if (isEmpty(accountAddress)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('accountAddress')));
    }

    if (isEmpty(data)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('data')));
    }

    if (isEmpty(data.contract_address) && isEmpty(data.erc_type)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('erc_type')));
    }

    return nftscanGet<AccountOwnParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.assets.accountOwn}${accountAddress}`,
      data,
    );
  }

  /**
   * Retrieve all assets owned by an account group by contract address.
   * - This endpoint returns all NFTs owned by an account address. And the NFTs are grouped according to contract address.
   * - details: {@link https://docs.nftscan.com/nftscan/getAccountNftAssetsGroupByContractAddressUsingGET}
   * @param accountAddress The address of the owner of the assets
   * @param data The query params {@link AccountOwnAllParams}
   * @returns Promise<{@link AccountOwnAllResponse}>
   */
  getAccountOwnAll(accountAddress: string, data: AccountOwnAllParams): Promise<AccountOwnAllResponse> {
    if (isEmpty(accountAddress)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('accountAddress')));
    }

    if (isEmpty(data)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('data')));
    }

    if (isEmpty(data.erc_type)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('erc_type')));
    }

    return nftscanGet<AccountOwnAllParams, AccountOwnAllResponse>(
      this.config,
      `${NftscanConst.API.assets.accountOwnAll}${accountAddress}`,
      data,
    );
  }

  /**
   * Retrieve assets minted by an account.
   * - This endpoint returns a set of NFTs minted by an account address.
   * - details: {@link https://docs.nftscan.com/nftscan/getAccountMintedUsingGET}
   * @param accountAddress The address of the owner of the assets
   * @param data The query params {@link AccountMintParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAccountMint(accountAddress: string, data?: AccountMintParams): Promise<CommonAssetResponse> {
    if (isEmpty(accountAddress)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('accountAddress')));
    }

    return nftscanGet<AccountMintParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.assets.accountMint}${accountAddress}`,
      data,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve assets by contract address.
   * - This endpoint returns a set of NFTs that belong to an NFT contract address. The NFTs are sorted by token_id with ascending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByContractAddressUsingGET}
   * @param contractAddress The NFT contract address for the assets
   * @param data The query params {@link CommonAssetParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByContract(contractAddress: string, data?: CommonAssetParams): Promise<CommonAssetResponse> {
    if (isEmpty(contractAddress)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('contractAddress')));
    }

    return nftscanGet<CommonAssetParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.assets.assets}${contractAddress}`,
      data,
    );
  }

  /**
   * Retrieve an asset by contract address and token ID.
   * - This endpoint returns a single NFT.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetByContractAddressAndTokenIdUsingGET}
   * @param contractAddress The NFT contract address for the assets
   * @param tokenId The NFT token ID. Can be in Hex or in Number
   * @param showAttribute Whether to load attribute data of the asset. Default is false
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByContractAndTokenId(contractAddress: string, tokenId: string, showAttribute?: boolean): Promise<Asset> {
    if (isEmpty(contractAddress)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('contractAddress')));
    }

    if (isEmpty(tokenId)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('tokenId')));
    }

    const data = showAttribute ? { show_attribute: true } : undefined;

    return nftscanGet<CommonAssetParams, Asset>(
      this.config,
      `${NftscanConst.API.assets.assets}${contractAddress}`,
      data,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve assets by list of contract address and token ID.
   * - This endpoint returns a set of NFTs according to the search list in the request body.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST_1}
   * @param filterList List of contract address with token ID. Maximum size is 50.
   * @param showAttribute Whether to load attribute data of the assets. Default is false
   * @returns Promise<Array<{@link Asset}>>
   */
  queryAssetsByBatch(
    filterList: Array<BatchQueryAssetsListItemParams>,
    showAttribute?: boolean,
  ): Promise<Array<Asset>> {
    if (isEmpty(filterList)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('filterList')));
    }

    if (filterList.length > 50) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, invalidParam('filterList', 'Maximum size is 50')));
    }

    const data: BatchQueryAssetsParams = {
      contract_address_with_token_id_list: filterList,
      show_attribute: showAttribute,
    };
    return nftscanPost<BatchQueryAssetsParams, Array<Asset>>(this.config, NftscanConst.API.assets.assetsBatch, data);
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve assets with filters
   * - This endpoint returns a list of NFT assets by applying search filters in the request body. The assets are sorted by nftscan_id with ascending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST}
   * @param data The query params {@link QueryAssetsByFiltersParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  queryAssetsByFilters(data: QueryAssetsByFiltersParams): Promise<CommonAssetResponse> {
    if (isEmpty(data)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('data')));
    }

    if (data.contract_address_list && data.contract_address_list.length > 50) {
      return Promise.reject(
        new NftscanError(NsError.PARAM_ERROR, invalidParam('contract_address_list', 'Maximum size is 50')),
      );
    }

    return nftscanPost<QueryAssetsByFiltersParams, CommonAssetResponse>(
      this.config,
      NftscanConst.API.assets.assetsFilters,
      data,
    );
  }
}
