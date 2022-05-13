import React, { ReactElement, useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import {
  selectCurrentAccountActivitiesWithTimestamps,
  selectCurrentAccountBalances,
} from "@tallyho/tally-background/redux-slices/selectors"
import { checkAlreadyClaimed } from "@tallyho/tally-background/redux-slices/claim"

import { HIDE_TOKEN_FEATURES } from "@tallyho/tally-background/features"
import { useBackgroundDispatch, useBackgroundSelector } from "../hooks"
import SharedPanelSwitcher from "../components/Shared/SharedPanelSwitcher"
import WalletAssetList from "../components/Wallet/WalletAssetList"
import WalletActivityList from "../components/Wallet/WalletActivityList"
import WalletAccountBalanceControl from "../components/Wallet/WalletAccountBalanceControl"
import OnboardingOpenClaimFlowBanner from "../components/Onboarding/OnboardingOpenClaimFlowBanner"

export default function Wallet(): ReactElement {
  const [panelNumber, setPanelNumber] = useState(0)

  const dispatch = useBackgroundDispatch()

  const hasAccounts = useBackgroundSelector(
    (state) => Object.keys(state.account.accountsData).length > 0
  )

  //  accountLoading, hasWalletErrorCode
  const accountData = useBackgroundSelector(selectCurrentAccountBalances)
  const claimState = useBackgroundSelector((state) => state.claim)

  useEffect(() => {
    dispatch(
      checkAlreadyClaimed({
        claimState,
      })
    )
  }, [claimState, dispatch])

  const { assetAmounts, totalMainCurrencyValue } = accountData ?? {
    assetAmounts: [],
    totalMainCurrencyValue: undefined,
  }

  const currentAccountActivities = useBackgroundSelector(
    selectCurrentAccountActivitiesWithTimestamps
  )

  const initializationLoadingTimeExpired = useBackgroundSelector(
    (background) => background.ui?.initializationLoadingTimeExpired
  )

  // If an account doesn't exist, display onboarding
  if (!hasAccounts) {
    return <Redirect to="/onboarding/info-intro" />
  }

  return (
    <>
      <div className="page_content">
        <div className="section">
          <WalletAccountBalanceControl
            balance={totalMainCurrencyValue}
            initializationLoadingTimeExpired={initializationLoadingTimeExpired}
          />
        </div>
        {!HIDE_TOKEN_FEATURES && <OnboardingOpenClaimFlowBanner />}
        <div className="section">
          <SharedPanelSwitcher
            setPanelNumber={setPanelNumber}
            panelNumber={panelNumber}
            panelNames={["Assets", "Activity"]}
          />
          <div className="panel standard_width">
            {panelNumber === 0 ? (
              <WalletAssetList
                assetAmounts={assetAmounts}
                initializationLoadingTimeExpired={
                  initializationLoadingTimeExpired
                }
              />
            ) : (
              <WalletActivityList activities={currentAccountActivities ?? []} />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .page_content {
            width: 100%;
            height: inherit;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
          .section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .panel {
            padding-top: 16px;
            box-sizing: border-box;
            min-height: 277px;
          }
          .panel::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  )
}
