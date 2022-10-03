import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import Web3 from 'web3'

const POLLING_INTERVAL = 12000
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 137],
})
export const web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/0fe795d7c0254f8096cdeba845d83e99')
export const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/0fe795d7c0254f8096cdeba845d83e99`,
  appName: 'ghostball',
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 137],
})

const selectRpc = (type: number): any => {
  switch (type) {
    case 1:
      return {
        1: 'https://mainnet.infura.io/v3/0fe795d7c0254f8096cdeba845d83e99',
      }
  }
}
export function activateInjectedProvider(providerName: 8 | 1) {
  const { ethereum }: any = window

  if (!ethereum?.providers) {
    return undefined
  }

  let provider
  switch (providerName) {
    case 8:
      provider = ethereum.providers.find(({ isCoinbaseWallet }: any) => isCoinbaseWallet)
      break
    case 1:
      provider = ethereum.providers.find(({ isMetaMask }: any) => isMetaMask)
      break
  }

  if (provider) {
    ethereum.setSelectedProvider(provider)
  }
}
const useAuth = () => {
  const { activate, deactivate, connector } = useWeb3React()

  let walletconnect: any
  const login = useCallback(
    (connectorID: any) => {
      //@ts-ignore
      walletconnect = new WalletConnectConnector({
        rpc: selectRpc(1),
        qrcode: true,
        pollingInterval: POLLING_INTERVAL,
        bridge: 'https://bridge.walletconnect.org',
      })

      const selectInjector = (type: number): any => {
        switch (type) {
          case 1:
            return injected
          case 2:
            return walletconnect
          case 8:
            return walletlink
        }
      }

      if (true) {
        if (connectorID === 8 || connectorID === 1) activateInjectedProvider(connectorID)
        activate(selectInjector(connectorID), async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(selectInjector(connectorID))
          } else {
            if (error instanceof NoEthereumProviderError) {
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              walletconnect.walletConnectProvider = null
            } else {
              console.log(error.name, error.message)
            }
          }
        })
      }
    },
    [activate]
  )

  const logout = useCallback(() => {
    deactivate()
    localStorage.clear()
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem('connectorId'))
    if (walletType === 2) {
      walletconnect.walletConnectProvider = null
    }
  }, [deactivate])

  return { login, logout }
}

export default useAuth
