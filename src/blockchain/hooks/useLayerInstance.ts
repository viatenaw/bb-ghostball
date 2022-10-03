import { LayerABI } from '../abi/Layer'
import { web3 } from '../../wallet_helpers/useAuth'

export const UseLayerInstance = (address: any) => {
  const LayerInstance: any = new web3.eth.Contract(address, LayerABI)
  return LayerInstance
}
