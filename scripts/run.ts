import { ethers } from 'hardhat'
import { WavePortal, WavePortal__factory } from '../typechain'

const main = async () => {
  const [owner, randomPerson] = await ethers.getSigners()
  // get the contract
  const waveContractFactory: WavePortal__factory =
    await ethers.getContractFactory('WavePortal')
  //  deploy the contract
  const waveContract: WavePortal = await waveContractFactory.deploy({
    // @ts-ignore Typings aren't that good
    value: ethers.utils.parseEther('0.1'),
  })
  await waveContract.deployed()

  console.log('Contract deployed to:', waveContract.address)
  console.log('Contract deployed by:', owner.address)

  let contractBalance = await ethers.provider.getBalance(waveContract.address)
  console.log('Contract balance:', ethers.utils.formatEther(contractBalance))

  let waveCount
  waveCount = await waveContract.getTotalWaves()

  let waveTxn = await waveContract.wave('a message')
  await waveTxn.wait()
  contractBalance = await ethers.provider.getBalance(waveContract.address)
  waveCount = await waveContract.getTotalWaves()
  console.log('Contract balance:', ethers.utils.formatEther(contractBalance))

  waveTxn = await waveContract.connect(randomPerson).wave('another message')
  await waveTxn.wait()
  contractBalance = await ethers.provider.getBalance(waveContract.address)
  console.log('Contract balance:', ethers.utils.formatEther(contractBalance))

  await waveContract.getTotalWaves()

  const allWaves = await waveContract.getAllWaves()
  console.log(allWaves)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
