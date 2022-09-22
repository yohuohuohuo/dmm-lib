# NFTScan SDK (JavaScript / TypeScript)
The NFTScan SDK is a `JavaScript` / `TypeScript` library which provides convenience and quick access to full NFT data with developers.

The SDK currently supports the following chains:

| Blockchain | Domain name             | Abbreviation |
| ---------- | ----------------------- | ------------ |
| Ethereum   | restapi.nftscan.com     | eth          |
| BNB chain  | bnbapi.nftscan.com      | bnb          |
| Arbitrum   | arbitrumapi.nftscan.com | arbitrum     |
| Moonbeam   | moonbeamapi.nftscan.com | glmr         |
| Polygon    | polygonapi.nftscan.com  | matic        |
| Optimism   | optimismapi.nftscan.com | optimism     |
| PlatON     | platonapi.nftscan.com   | platon       |
| Solana     | solanaapi.nftscan.com   | solana       |

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
import { ErcType, EvmChain, NftscanEvm } from "nftscan-sdk";

const config = {
  apiKey: "<YOUR_API_KEY>", // Replace with your NFTScan API key.
  chain: EvmChain.ETH, // Replace with your chain.
};

const evm = new NftscanEvm(config);
```
The `new NftscanEvm()` returns an object that can query the EVM-like chain, For here it is `EvmChain.ETH`, which stand for the Ethereum blockchain. See more EVM-like chain at [EvmChain](./src/types/nftscan-type.ts).

And then you can use the object `evm` to access to the NFTScan API, form example `getAssetsByAccount`, which can retrieve the assets owned by an account.

```ts
const accountAddress = "<ACCOUNT_ADDRESS>"; // Replace with the account address you want to query.
// Access asset-related APIs
evm.asset
  // Retrieve assets owned by an account.
  .getAssetsByAccount(accountAddress, {
    erc_type: ErcType.ERC_721, // Can be erc721 or erc1155
  })
  .then((res) => console.log(res));

// Access transaction-related APIs 
evm.transaction
  // Retrieve transactions by an account
  .getTransactionsByAccount(accountAddress)
  .then((res) => console.log(res));
```
Except `asset` and `transaction`, the `NftscanEvm` also provides several other objects, for example `collection` \ `statistic` \ `other`, these objects provide different types of APIs.

To query the other EVM-like chain's asset, for example 'Arbitrum', change the config param `chain` to `EvmChain.ARBITRUM`:
```ts
const evm = new NftscanEvm({
  apiKey: "<YOUR_API_KEY>",
  chain: EvmChain.ARBITRUM, 
});
```

We also support the Solana blockchain, to access the API, you just need to `new NftscanSolana()` to get an object.

```ts
const sol = new NftscanSolana({ apiKey: "<YOUR_API_KEY>" });
sol.asset
  .getAssetsByAccount("<ACCOUNT_ADDRESS>")
  .then((res) => console.log(res));
```

### Pagination
In general, NFTScan's API that supports pagination will uses the query params `cursor` as the paging parameter, The return data of the API call will contain the attribute `next`, you can pass in the `next` to the next call.

For example:
```ts
let nextCursor = "";
const params = {
  cursor: nextCursor, // A cursor to retrieve the next page
  limit: 20, // Page size
};
const { content, next } = await evm.asset.getAccountMinted("<ACCOUNT_ADDRESS>", params);
// update the nextCursor
nextCursor = next;
```
###More

- [NFTScan API](https://developer.nftscan.com/)
- [NFTScan API Docs](https://docs.nftscan.com/)
- [NFTScan SDK Docs](https://yohuohuohuo.github.io/dmm-lib/)
- [NFTScan NFT Explorer](https://www.nftscan.com/)
