export function web3Loaded(connection) {
    return {
      type: 'WEB3_LOADED',
      connection
    }
  }

export function web3NetworkLoaded(network) {
    return {
      type: 'WEB3_NETWORK_LOADED',
      network
    }
  }