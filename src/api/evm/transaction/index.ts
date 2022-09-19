import { nftscanGet, nftscanPost } from '../../../http/nftscan.http';
import { QueryTransactionsByFiltersParams, TransactionParams } from '../../../types/evm/transaction/request-params';
import { CommonTransactionResponse, Transaction } from '../../../types/evm/transaction/response-data';
import { invalidParam, missingParam, NftscanError, NsError } from '../../../types/nftscan-error';
import { BaseNftscanRequestParam, NsObject } from '../../../types/nftscan-type';
import { isEmpty } from '../../../util/common.util';
import NftscanConst from '../../../util/nftscan.const';
import BaseApi from '../../base-api';

/**
 * Transaction related API
 */
export default class NftscanEvmTransaction extends BaseApi {
  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by an account.
   * - This endpoint returns a list of NFT transactions for an account address. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getAccountTransactionsUsingGET_1}
   * @param accountAddress The account address
   * @param params The query params {@link TransactionParams}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByAccount(accountAddress: string, params?: TransactionParams): Promise<CommonTransactionResponse> {
    if (isEmpty(accountAddress)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('accountAddress')));
    }

    if (params) {
      const { token_id: TokenId, contract_address: contractAddress } = params;

      if (!isEmpty(TokenId) && isEmpty(contractAddress)) {
        return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('contract_address')));
      }
    }

    return nftscanGet<TransactionParams, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.evm.transaction.getTransactionsByAccount}${accountAddress}`,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by contract address.
   * - This endpoint returns a list of NFT transactions for an NFT contract address. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getTransactionsByContractAddressUsingGET}
   * @param contractAddress The NFT contract address
   * @param params The query params {@link BaseNftscanRequestParam}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByContract(
    contractAddress: string,
    params: BaseNftscanRequestParam,
  ): Promise<CommonTransactionResponse> {
    if (isEmpty(contractAddress)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('contractAddress')));
    }

    return nftscanGet<BaseNftscanRequestParam, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.evm.transaction.getTransactions}${contractAddress}`,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by contract address.
   * - This endpoint returns a list of NFT transactions for an NFT contract address. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getTransactionByContractAddressAndTokenIdUsingGET}
   * @param contractAddress The NFT contract address
   * @param tokenId The NFT token ID. Can be in Hex or in Number
   * @param params The query params {@link BaseNftscanRequestParam}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByContractAndTokenId(
    contractAddress: string,
    tokenId: string,
    params: BaseNftscanRequestParam,
  ): Promise<CommonTransactionResponse> {
    if (isEmpty(contractAddress)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('contractAddress')));
    }

    if (isEmpty(tokenId)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('tokenId')));
    }

    return nftscanGet<BaseNftscanRequestParam, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.evm.transaction.getTransactions}${contractAddress}/${tokenId}`,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by to address.
   * - This endpoint returns a list of NFT transactions filtered by the param to of the transaction. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getTransactionByTxToUsingGET}
   * @param toAddress The to address of the transaction
   * @param params The query params {@link BaseNftscanRequestParam}
   * @returns Promise<{@link CommonTransactionResponse}>
   */
  getTransactionsByToAddress(toAddress: string, params: BaseNftscanRequestParam): Promise<CommonTransactionResponse> {
    if (isEmpty(toAddress)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('toAddress')));
    }

    return nftscanGet<BaseNftscanRequestParam, CommonTransactionResponse>(
      this.config,
      `${NftscanConst.API.evm.transaction.getTransactionsByToAddress}${toAddress}`,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions with filters
   * - This endpoint returns a list of NFT transactions by applying search filters in the request body. The transactions are sorted by timestamp with descending direction.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST_2}
   * @param params The query params {@link QueryTransactionsByFiltersParams}
   * @returns Promise<{@link CommonAssetResponse}>
   */
  queryTransactionsByFilters(params: QueryTransactionsByFiltersParams): Promise<CommonTransactionResponse> {
    const { contract_address_list: contractAddressList } = params;

    if (contractAddressList && contractAddressList.length > 50) {
      return Promise.reject(
        new NftscanError(NsError.PARAM_ERROR, invalidParam('contract_address_list', 'Maximum size is 50')),
      );
    }

    return nftscanPost<QueryTransactionsByFiltersParams, CommonTransactionResponse>(
      this.config,
      NftscanConst.API.evm.transaction.queryTransactionsByFilters,
      params,
    );
  }

  /**
   * *****
   * [PRO]
   * *****
   * Retrieve transactions by the list of transaction hash.
   * - This endpoint returns the transaction records queried based on the list of transaction hash.
   * - details: {@link https://docs.nftscan.com/nftscan/getAssetsByListUsingPOST_3}
   * @param txHashList List of transaction hash. Maximum size is 50.
   * @returns Promise<{@link Array<Transaction>}>
   */
  queryTransactionsByTxHashList(txHashList: Array<string>): Promise<Array<Transaction>> {
    if (isEmpty(txHashList)) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam('txHashList')));
    }

    if (txHashList.length > 50) {
      return Promise.reject(new NftscanError(NsError.PARAM_ERROR, invalidParam('txHashList', 'Maximum size is 50')));
    }

    const params: NsObject = { tx_hash_list: txHashList };

    return nftscanPost<NsObject, Array<Transaction>>(
      this.config,
      NftscanConst.API.evm.transaction.queryTransactionsByTxHashList,
      params,
    );
  }
}
