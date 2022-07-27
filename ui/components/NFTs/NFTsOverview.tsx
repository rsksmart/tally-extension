import React, { ReactElement, useEffect } from "react"
import { fetchThenUpdateNFTsByNetwork } from "@tallyho/tally-background/redux-slices/nfts"
import {
  getAllAddresses,
  getAllNetworks,
} from "@tallyho/tally-background/redux-slices/selectors"
import selectNFTs from "@tallyho/tally-background/redux-slices/selectors/nftsSelectors"
import { useBackgroundDispatch, useBackgroundSelector } from "../../hooks"
import NFTsList from "./NFTsList"

export default function NFTsOverview(): ReactElement {
  const NFTs = useBackgroundSelector(selectNFTs)
  const allNetworks = useBackgroundSelector(getAllNetworks)
  const allAddresses = useBackgroundSelector(getAllAddresses)
  const dispatch = useBackgroundDispatch()

  useEffect(() => {
    allAddresses.forEach((address) =>
      allNetworks.forEach((network) =>
        dispatch(
          fetchThenUpdateNFTsByNetwork({ address, currentNetwork: network })
        )
      )
    )
  }, [allAddresses, allNetworks, dispatch])

  const NFTItems = Object.values(NFTs.evm).flatMap((NFTsByChain) =>
    Object.values(NFTsByChain).flatMap((item) => item)
  )

  return (
    <div className="nft_overview">
      {NFTItems && <NFTsList NFTs={NFTItems} />}
      <style jsx>
        {`
          .nft_overview {
            margin: 8px 16px;
          }
        `}
      </style>
    </div>
  )
}
