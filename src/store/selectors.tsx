import { createSelector } from 'reselect'
import { get } from 'lodash'

const web3 = state => get(state, 'web3.connection')
export const web3Selector = createSelector(web3, w => w)