

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

  