import { useEffect, useState, useRef } from 'react'
import { ethers } from 'ethers'
import Reward from 'react-rewards'
import Loader from 'react-loader-spinner'
import { Dialog } from '@reach/dialog'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import '@reach/dialog/styles.css'

import { WavePortal } from '../typechain'
import './App.css'
import CONTRACT_ABI from './WavePortal.json'

const CONTRACT_ADDRESS = '0xB8b8EAe71e659C3265714Cf3b944FB6153A3C397'

const App = () => {
  const [account, setAccount] = useState()
  const [pendingTransaction, setPendingTransaction] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [message, setMessage] = useState('Hello')
  const [allWaves, setAllWaves] = useState<
    Array<{ address: string; timestamp: Date; message: string }>
  >([])
  const waveBtn = useRef()

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

  const wave = async () => {
    let waveTxn
    try {
      // @ts-ignore
      const { ethereum } = window

      if (!ethereum) {
        console.log("Ethereum object doesn't exist!")
        return
      }

      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI.abi,
        signer,
      ) as WavePortal

      let count = await contract.getTotalWaves()
      console.log('Retrieved total wave count...', count.toNumber())

      setPendingTransaction(true)
      // If user gets lucky more code runs means we need more gas which
      // This helps avoid of gas because metamask underestimates
      // If all gas is not used it gets refunded
      waveTxn = await contract.wave(message, { gasLimit: 300000 })
      toast.info(
        <div>
          Transaction Started. See{' '}
          <a
            target="_blank"
            rel="noopener"
            href={`https://rinkeby.etherscan.io/tx/${waveTxn.hash!}`}
          >
            Rinkeby Etherscan
          </a>
        </div>,
      )
      console.log('Mining...', waveTxn.hash)
      await waveTxn.wait()
      console.log('Mined!', waveTxn.hash)
      setPendingTransaction(false)
      // @ts-ignore
      waveBtn?.current.rewardMe()
      setTimeout(() => {
        window.location.reload()
      }, 3000)

      count = await contract.getTotalWaves()
      console.log('Retrieved total wave count...', count.toNumber())
    } catch (error) {
      // @ts-ignore
      waveBtn?.current.punishMe()
      toast.error(
        <div>
          Transaction Failed. See{' '}
          <a
            target="_blank"
            rel="noopener"
            href={`https://rinkeby.etherscan.io/tx/${waveTxn.hash!}`}
          >
            Rinkeby Etherscan
          </a>
        </div>,
      )
      console.log(error)
    }
  }

  const getAllWaves = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window

      if (!ethereum) {
        console.log("Ethereum object doesn't exist!")
        return
      }

      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI.abi,
        signer,
      ) as WavePortal

      const waves = await contract.getAllWaves()
      console.log('Retrieved all waves...', waves)

      const wavesCleaned = []
      waves.forEach((wave) => {
        wavesCleaned.push({
          address: wave.waver,
          timestamp: new Date(wave.timestamp.toNumber() * 1000),
          message: wave.message,
        })
      })

      setAllWaves(wavesCleaned)
    } catch (error) {
      console.log(error)
    }
  }

  // This runs our function when the page loads.
  useEffect(() => {
    checkIfWalletIsConnected()
    getAllWaves()
  }, [])

  const Modal = () => (
    <Dialog
      className="modal"
      isOpen={openModal}
      onDismiss={() => setOpenModal(false)}
    >
      <input
        type="textarea"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        onClick={() => {
          wave()
          setOpenModal(false)
        }}
      >
        Send
      </button>
    </Dialog>
  )

  return (
    <main className="home">
      <ToastContainer
        position="top-center"
        hideProgressBar
        closeOnClick
        theme="dark"
        autoClose={false}
      />
      <h1>Hey there</h1>
      <h3>I am Saihaj. Connect your Ethereum wallet and wave at me.</h3>
      <Modal />
      {account ? (
        <Reward ref={waveBtn} type="memphis">
          <div className="waveButton">
            {pendingTransaction ? (
              <Loader width={60} type="Circles" color="var(--light-primary)" />
            ) : (
              <button onClick={() => setOpenModal(true)}>Wave at me</button>
            )}
          </div>
        </Reward>
      ) : (
        <button ref={waveBtn} className="waveButton" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
      <div className="waves">
        {allWaves.map((wave, index) => {
          return (
            <div key={index}>
              {wave.address} said {wave.message} on{' '}
              {wave.timestamp.toLocaleDateString()}
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default App
