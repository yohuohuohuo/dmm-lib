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
  API_KEY_ERROR = 'api_key_error',
  API_CHAIN_ERROR = 'api_chain_error',
  REQUEST_ERROR = 'request_error',
  RESPONSE_DATA_EMPTY = 'response_data_empty',
  NFTSCAN_DATA_EMPTY = 'nftscan_data_empty',
  PARAM_ERROR = 'param_error',
}

function missingParam(paramName: string) {
  return `The param '${paramName}' is required.`;
}

function invalidParam(paramName: string, extMsg?: string) {
  return `The param '${paramName}' is invalid. ${extMsg || ''}`;
}

export function invalidParamError(paramName: string, extMsg?: string) {
  return Promise.reject(new NftscanError(NsError.PARAM_ERROR, invalidParam(paramName, extMsg)));
}

export function missingParamError(paramName: string) {
  return Promise.reject(new NftscanError(NsError.PARAM_ERROR, missingParam(paramName)));
}

export function invalidLimitError(max: number) {
  return Promise.reject(new NftscanError(NsError.PARAM_ERROR, invalidParam('limit', `capped at ${max}`)));
}
