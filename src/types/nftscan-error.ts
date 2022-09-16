/* eslint-disable no-shadow */

/**
 * NFTScan SDK's wrapper error object
 */
export class NftscanError {
  /**
   * error code
   */
  code: string | number = '';

  /**
   * error message
   */
  msg = '';

  constructor(code: string | number, msg?: string) {
    this.code = code;
    this.msg = msg || '';
  }
}

/**
 * NFTScan SDK's error code
 */
export enum NsError {
  API_KEY = 'api_key_error',
  REQUEST_ERROR = 'request_error',
  RESPONSE_DATA_EMPTY = 'response_data_empty',
  NFTSCAN_DATA_EMPTY = 'nftscan_data_empty',
}
