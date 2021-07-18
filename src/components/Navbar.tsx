import React, { Component } from 'react'
import { connect } from 'react-redux'
import Identicon from 'identicon.js';
//import eth from '../images/eth.png'
import {
  accountSelector,
  balanceSelector,
  networkSelector,
  web3Selector
} from '../store/selectors'
import './Style.css';

