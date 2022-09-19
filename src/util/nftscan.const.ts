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
    evm: {
      assets: {
        getAssetsByAccount: '/v2/account/own/',
        getAllAssets: '/v2/account/own/all/',
        getAccountMinted: '/v2/account/mint/',
        getAssets: '/v2/assets/',
        queryAssetsInBatches: '/v2/assets/batch',
        queryAssetsByFilters: '/v2/assets/filters',
      },
      transaction: {
        getTransactionsByAccount: '/v2/transactions/account/',
        getTransactions: '/v2/transactions/',
        getTransactionsByToAddress: '/v2/transactions/to/',
        queryTransactionsByFilters: '/v2/transactions/filters',
        queryTransactionsByTxHashList: '/v2/transactions/txhash',
      },
      collection: {
        getCollectionsByContract: '/v2/collections/',
        getCollectionsByRanking: '/v2/collections/rankings',
        queryCollectionsByFilters: '/v2/collections/filters',
      },
      statistic: {
        getTradeRanking: '/v2/statistics/ranking/trade',
        getCollectionRanking: '/v2/statistics/ranking/collection',
        getCollectionTrade: '/v2/statistics/collection/trade/',
        getCollectionTrending: '/v2/statistics/collection/trending/',
        getAccountOverview: '/v2/statistics/overview/',
        getMarketplaceRanking: '/v2/statistics/ranking/marketplace',
        getMarketCapRanking: '/v2/statistics/ranking/marketcap',
        getCollectionStatistics: '/v2/statistics/collection/',
        getMintRanking: '/v2/statistics/ranking/mint',
        getMintAmount: '/v2/statistics/mint/amount',
        getTradersRanking: '/v2/statistics/ranking/traders',
        getGasRanking: '/v2/statistics/ranking/gas',
        getVolumeIn24h: '/v2/statistics/volume/24h',
      },
      other: {
        getBlockNumber: '/v2/blocknumber',
        queryAssestAmountByAccounts: '/v2/asset/account/amount',
        getAssetOwnerByContract: '/v2/asset/collection/amount',
        getAssetOwnerByContractAndTokenId: '/v2/asset/owners',
        refreshMetadata: '/v2/asset/metadata/refresh',
      },
    },
  };
}
