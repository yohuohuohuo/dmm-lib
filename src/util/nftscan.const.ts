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
      accountOwn: '/v2/account/own/',
      accountOwnAll: '/v2/account/own/all/',
      accountMint: '/v2/account/mint/',
      assets: '/v2/assets/',
      assetsBatch: '/v2/assets/batch',
      assetsFilters: '/v2/assets/filters',
    },
  };
}
