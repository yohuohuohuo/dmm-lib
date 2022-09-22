---
home: true
heroText: NFTScan SDK
tagline: Quick access to Web3 via NFTScan

# 配置首页按钮
actions:
  - text: Guide
    link: /guide/
    type: primary
  - text: Github
    link: https://github.com/yohuohuohuo/dmm-lib
    type: secondary

# 首页的页脚
footer: MIT Licensed | Copyright © 2022 yohuohuohuo
---

NFTScan API provides convenience and quick access to full NFT data with developers

QUICK START
<CodeGroup>
  <CodeGroupItem title="YARN" active>

```shell
yarn add nftscan-sdk
```

```ts
import { ErcType, EvmChain, NftscanEvm } from "nftscan-sdk";

const config = {
  apiKey: "<YOUR_API_KEY>", // Replace with your NFTScan API key.
  chain: EvmChain.ETH, // Replace with your chain.
};

const evm = new NftscanEvm(config);
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell
npm install nftscan-sdk
```

```ts
import { ErcType, EvmChain, NftscanEvm } from "nftscan-sdk";

const config = {
  apiKey: "<YOUR_API_KEY>", // Replace with your NFTScan API key.
  chain: EvmChain.ETH, // Replace with your chain.
};

const evm = new NftscanEvm(config);
```

  </CodeGroupItem>
</CodeGroup>
