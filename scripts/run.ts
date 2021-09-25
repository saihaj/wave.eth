import { ethers } from 'hardhat'
import { Contract, ContractFactory } from 'ethers'

const main = async () => {
  // get the contract
  const waveContractFactory: ContractFactory = await ethers.getContractFactory(
    'WavePortal',
  )
  //  deploy the contract
  const waveContract: Contract = await waveContractFactory.deploy()
  await waveContract.deployed()
  console.log('Contract deployed to:', waveContract.address)
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
