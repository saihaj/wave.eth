import { config } from 'dotenv'
config() // Load env variables
import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

task('accounts', 'Prints the list of accounts', async (_, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(await account.address)
  }
})

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/E27pYQjb9MZQ55BvxLe4TAnTIrlPY49T',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
}
