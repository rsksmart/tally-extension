import { EVMNetwork, Network } from "../networks"
import { BTC, ETH, MATIC, OPTIMISTIC_ETH, tRBTC } from "./currencies"

export const ETHEREUM: EVMNetwork = {
  name: "Ethereum",
  baseAsset: ETH,
  chainID: "1",
  family: "EVM",
  coingeckoPlatformID: "ethereum",
}

export const POLYGON: EVMNetwork = {
  name: "Polygon",
  baseAsset: MATIC,
  chainID: "137",
  family: "EVM",
  coingeckoPlatformID: "polygon-pos",
}
export const RSK: EVMNetwork = {
  name: "RSK",
  baseAsset: tRBTC,
  chainID: "31",
  family: "EVM",
  coingeckoPlatformID: "rootstock",
}
export const ARBITRUM_ONE: EVMNetwork = {
  name: "Arbitrum",
  baseAsset: ETH,
  chainID: "42161",
  family: "EVM",
  coingeckoPlatformID: "arbitrum-one",
}

export const OPTIMISM: EVMNetwork = {
  name: "Optimism",
  baseAsset: OPTIMISTIC_ETH,
  chainID: "10",
  family: "EVM",
  coingeckoPlatformID: "optimistic-ethereum",
}

export const ROPSTEN: EVMNetwork = {
  name: "Ropsten",
  baseAsset: ETH,
  chainID: "3",
  family: "EVM",
  coingeckoPlatformID: "ethereum",
}

export const RINKEBY: EVMNetwork = {
  name: "Rinkeby",
  baseAsset: ETH,
  chainID: "4",
  family: "EVM",
  coingeckoPlatformID: "ethereum",
}

export const GOERLI: EVMNetwork = {
  name: "Goerli",
  baseAsset: ETH,
  chainID: "5",
  family: "EVM",
  coingeckoPlatformID: "ethereum",
}

export const KOVAN: EVMNetwork = {
  name: "Kovan",
  baseAsset: ETH,
  chainID: "42",
  family: "EVM",
  coingeckoPlatformID: "ethereum",
}

export const BITCOIN: Network = {
  name: "Bitcoin",
  baseAsset: BTC,
  family: "BTC",
  coingeckoPlatformID: "bitcoin",
}

export const FORK: EVMNetwork = {
  name: "Ethereum",
  baseAsset: ETH,
  chainID: process.env.MAINNET_FORK_CHAIN_ID ?? "1337",
  family: "EVM",
  coingeckoPlatformID: "ethereum",
}

export const EIP_1559_COMPLIANT_CHAIN_IDS = new Set(
  [ETHEREUM, POLYGON, GOERLI, RSK].map((network) => network.chainID)
)
export const EVM_ROLLUP_CHAIN_IDS = new Set(
  [OPTIMISM].map((network) => network.chainID)
)

export const NETWORK_BY_CHAIN_ID = {
  [ETHEREUM.chainID]: ETHEREUM,
  [POLYGON.chainID]: POLYGON,
  [RSK.chainID]: RSK,
  [ARBITRUM_ONE.chainID]: ARBITRUM_ONE,
  [OPTIMISM.chainID]: OPTIMISM,
  [ROPSTEN.chainID]: ROPSTEN,
  [RINKEBY.chainID]: RINKEBY,
  [GOERLI.chainID]: GOERLI,
  [KOVAN.chainID]: KOVAN,
  [FORK.chainID]: FORK,
}
