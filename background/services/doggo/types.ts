import { HexString } from "../../types"

export interface Eligible {
  index: HexString
  account: HexString
  amount: BigInt
  proof: HexString[]
}

export interface Claim {
  eligibles: Eligible[]
}

export interface IPFSLinkItem {
  Hash: { "/": string }
  Name: string
  Tsize: number
}
