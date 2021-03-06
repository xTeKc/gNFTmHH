//import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import * as dotenv from 'dotenv';
import 'babel-register';
import 'babel-polyfill';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (args, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: "0.8.4",

paths: {
  sources: "./src/backend/contracts",
  abis: "./src/backend/",
  artifacts: "./src/backend/",
  migrations: "./src/backend/",
  scripts: "./src/backend/scripts",
  tests: "./src/backend/test",
  cache: "./cache"
},



};



