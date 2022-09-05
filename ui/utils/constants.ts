import {
  ETHEREUM,
  GOERLI,
  OPTIMISM,
  POLYGON,
  RSK,
} from "@tallyho/tally-background/constants"

export const doggoTokenDecimalDigits = 18

export const scanWebsite = {
  [ETHEREUM.chainID]: { title: "Etherscan", url: "https://etherscan.io" },
  [RSK.chainID]: { title: "RSKExplorer", url: "https://explorer.rsk.co/" },
  [OPTIMISM.chainID]: {
    title: "Etherscan",
    url: "https://optimistic.etherscan.io",
  },
  [POLYGON.chainID]: { title: "Polygonscan", url: "https://polygonscan.com" },
  [GOERLI.chainID]: { title: "Etherscan", url: "https://goerli.etherscan.io/" },
}
