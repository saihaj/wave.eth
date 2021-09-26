import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import './App.css'

const App = () => {
  const [account, setAccount] = useState()

  const checkIfWalletIsConnected = async () => {
    //   @ts-ignore
    const { ethereum } = window

    // First make sure we have access to window.ethereum
    if (!ethereum) {
      console.log('Make sure you have metamask!')
      return
    } else {
      console.log('We have the ethereum object', ethereum)
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' })
    if (accounts.length !== 0) {
      const account = accounts[0]
      console.log('Found an authorized account:', account)
      setAccount(account)
    } else {
      console.log('No authorized account found')
    }
  }

  const connectWallet = async () => {
    try {
      //   @ts-ignore
      const { ethereum } = window

      if (!ethereum) {
        alert('Get MetaMask!')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Connected', accounts[0])
      setAccount(accounts[0])
    } catch (error) {
      console.log(error)
    }
  }

  // This runs our function when the page loads.
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <main className="home">
      <h1>Hey there</h1>
      <h3>I am Saihaj. Connect your Ethereum wallet and wave at me.</h3>

      {account ? (
        <button
          onClick={() => {
            console.log('wave')
          }}
        >
          Wave at me
        </button>
      ) : (
        <button className="waveButton" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </main>
  )
}

export default App
