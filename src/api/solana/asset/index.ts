import { nftscanGet } from '../../../http/nftscan.http';
import { CommonAssetResponse } from '../../../types/solana/asset/response-data';
import { invalidLimitError, missingParamError } from '../../../types/nftscan-error';
import { AssetParams } from '../../../types/solana/asset/request-params';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Asset related API
 */
export default class NftscanSolanaAsset extends BaseApi {
  /**
   * Retrieve assets owned by an account.
   * - This endpoint returns a set of NFTs owned by an account address.
   * - details: {@link https://docs.nftscan.com/solana/getAccountNftAssetsUsingGET_1}
   * @param accountAddress The address of the owner of the assets
   * @param params The query params {@link AssetParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  getAssetsByAccount(accountAddress: string, params?: AssetParams): Promise<CommonAssetResponse> {
    if (isEmpty(accountAddress)) {
      return missingParamError('accountAddress');
    }

    if (params) {
      const { limit } = params;
      if (limit && limit > 1000) {
        return invalidLimitError(1000);
      }
    }

    return nftscanGet<AssetParams, CommonAssetResponse>(
      this.config,
      `${NftscanConst.API.solana.assets.getAssetsByAccount}${accountAddress}`,
      params,
    );
  }
}
