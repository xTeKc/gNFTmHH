

import Web3 from 'web3'
import {
  web3Loaded,
  contractLoaded,
  web3NetworkLoaded,
  web3AccountLoaded,
  web3BalanceLoaded,
  metadataLoaded,
  nftStateLoaded
} from './actions'

export const loadWeb3 = async (dispatch) => {
    try{
      if(typeof window.ethereum!=='undefined'){
        window.ethereum.autoRefreshOnNetworkChange = false;
        const web3 = new Web3(window.ethereum)
        dispatch(web3Loaded(web3))
        return web3
      }
    } catch (e) {
      console.log('Error, load Web3: ', e)
    }
  }

export const loadNetwork = async (dispatch, web3) => {
    try{
      let network = await web3.eth.net.getNetworkType()
      network = network.charAt(0).toUpperCase()+network.slice(1)
      dispatch(web3NetworkLoaded(network))
      return network
    } catch (e) {
      dispatch(web3NetworkLoaded('Wrong network'))
      console.log('Error, load network: ', e)
    }
  }

  