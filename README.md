# NFTScan SDK (JavaScript / TypeScript)
The NFTScan SDK is a `JavaScript` / `TypeScript` library which provides convenience and quick access to full NFT data with developers.

The SDK currently supports the following chains:

Blockchain | Domain name | Abbreviation
------------- | ------------- | -------------
Ethereum | restapi.nftscan.com | eth
BNB chain | bnbapi.nftscan.com | bnb
Arbitrum | arbitrumapi.nftscan.com | arbitrum
Moonbeam | moonbeamapi.nftscan.com | glmr
Polygon | polygonapi.nftscan.com | matic
Optimism | optimismapi.nftscan.com | optimism
PlatON | platonapi.nftscan.com | platon
Solana | solanaapi.nftscan.com | solana

## Getting started

via `npm`:

```shell
npm install nftscan-sdk
```

or `yarn`:

```shell
yarn add nftscan-sdk
```

Then you can import and use the SDK:

```ts
import { EvmChain, NftscanEvm } from "nftscan-sdk";

const evm = new NftscanEvm({ apiKey: '<YOUR_API_KEY>', chain: EvmChain.ETH });
```


[doc](https://yohuohuohuo.github.io/dmm-lib/)
