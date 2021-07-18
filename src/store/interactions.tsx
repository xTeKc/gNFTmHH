

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

export const loadAccount = async (dispatch, web3) => {
    try{
      const accounts = await web3.eth.getAccounts()
      const account = await accounts[0]
      if(typeof account !== 'undefined'){
        dispatch(web3AccountLoaded(account))
        return account
      } else {
        dispatch(web3AccountLoaded(null))
        return null
      }
    } catch (e) {
      console.log('Error, load account: ', e)
    }
  }  

export const loadBalance = async (dispatch, web3, account) => {
    try {
      const etherBalance = await web3.eth.getBalance(account)
      dispatch(web3BalanceLoaded((etherBalance/10**18).toFixed(5)))
    } catch (e) {
      console.log('Error, load balance: ', e)
    }
  } 

export const loadContract = async (dispatch, web3, netId) => {
    try {
      const contract = new web3.eth.Contract(Contract.abi, Contract.networks[netId].address)
      dispatch(contractLoaded(contract))
      return contract
    } catch (e) {
      window.alert('Wrong network!')
      console.log('Error, load contract: ', e)
      dispatch(contractLoaded(null))
      return null
    }
  }  

export const update = async (dispatch) => {
    try{
      let account, web3, netId, contract
  
      web3 = await loadWeb3(dispatch)
      await loadNetwork(dispatch, web3)
      account = await loadAccount(dispatch, web3)
      netId = await web3.eth.net.getId()
      contract = await loadContract(dispatch, web3, netId)
    
      await loadNftData(dispatch, contract)
      await loadNftState(dispatch, contract)
      if(account && contract){
        await loadBalance(dispatch, web3, account)
      }
    } catch (e) {
      console.log('Error, update data: ', e)
    }
  }