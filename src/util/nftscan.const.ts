export default class NftscanConst {
  /**
   * NFTScan's api base url
   */
  static readonly BASE_URL = {
    ETH: 'https://restapi.nftscan.com/api/',
    BNB: 'https://bnbapi.nftscan.com/api/',
    MATIC: 'https://polygonapi.nftscan.com/api/',
    GLMR: 'https://moonbeamapi.nftscan.com/api/',
    Arbitrum: 'https://arbitrumapi.nftscan.com/api/',
    Optimism: 'https://optimismapi.nftscan.com/api/',
    Solana: 'https://solanaapi.nftscan.com/api/',
  };

  /**
   * NFTScan's api url
   */
  static readonly API = {
    assets: {
      getAssetsByAccount: '/v2/account/own/',
      getAllAssets: '/v2/account/own/all/',
      getAccountMinted: '/v2/account/mint/',
      getAssets: '/v2/assets/',
      queryAssetsInBatches: '/v2/assets/batch',
      queryAssetsByFilters: '/v2/assets/filters',
    },
    transaction: {},
  };
}
