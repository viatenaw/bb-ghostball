import { web3 } from '../wallet_helpers/useAuth'
import { composableABI, composableAddress } from './abi/ComposableNFT'
import { whiteListABI, whiteListAddress } from './abi/whiteList'

export const ComposableNFT: any = new web3.eth.Contract(composableABI, composableAddress)
export const WhiteList: any = new web3.eth.Contract(whiteListABI, whiteListAddress)
