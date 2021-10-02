# Wave.eth

Simple dApp to say Hi and 10% greeters have chance to get free ETH.

Checkout [Build a Web3 App with Solidity + Ethereum Smart Contracts](https://app.buildspace.so/courses/CO02cf0f1c-f996-4f50-9669-cf945ca3fb0b) course on [Buildspace](https://buildspace.so).

### Running this dApp

#### Prerequisites

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) `<=14.x`

#### Recommended

- [Visual Studio Code](https://code.visualstudio.com)

#### Installation

1. Clone this repository
2. Run `npm install`
3. Compile contract `npm run compile`
4. Start a local hardhat node `npm run start:node`
5. Deploy contract to local node `npm run deploy:local`
6. You will get a deployed contract address in console. Update `CONTRACT_ADDRESS` in [`App.tsx`](./src/App.tsx)
7. Serve frontend to Wave `npm run dev`

#### Deploying this dApp

1. Create an [Alchemy account](https://www.alchemy.com) to deploy to testnet
2. Update [`hardhat.config.ts`](./hardhat.config.ts) with the URL for Rinkbey testnet you get from Alchemy\
3. Create a `.env` `cp .env.example .env`
4. Add your [Private key from MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) to [`.env`](./.env)
5. Deploy to testnet `npm run deploy:testnet`
6. You will get a deployed contract address in console. Update `CONTRACT_ADDRESS` in [`App.tsx`](./src/App.tsx)
7. Serve frontend to Wave `npm run dev`
