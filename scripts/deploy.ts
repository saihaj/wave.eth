import { ethers } from 'hardhat'
import { WavePortal, WavePortal__factory } from '../typechain'

const main = async () => {
  const [deployer] = await ethers.getSigners()
  const accountBalance = await deployer.getBalance()

  console.log('Deploying contracts with account: ', deployer.address)
  console.log('Account balance: ', accountBalance.toString())

  const Token: WavePortal__factory = await ethers.getContractFactory(
    'WavePortal',
  )
  const portal: WavePortal = await Token.deploy({
    // @ts-ignore Typings aren't that good
    value: ethers.utils.parseEther('0.001'),
  })

  console.log('WavePortal address: ', portal.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
