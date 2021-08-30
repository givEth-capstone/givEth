import React, {useEffect} from 'react'
import axios from 'axios'
import Web3 from "web3";


export default function Success(props) {
  window.web3 = new Web3(window.ethereum);
  const web3 = window.web3;

  
  // let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

  let {donation, txHash, accounts} = props.location.state
  // donation = Number(donation)
  useEffect(()=> {
  async function showDonationReceipt(){
    console.log(txHash)
    console.log("this is accounts from success component" ,accounts)
    const transaction = await window.ethereum.request({ id:accounts[0], method: 'eth_getTransactionByHash', params: [txHash] }) //
    const transactionReceipt = await window.ethereum.request({ method: 'eth_getTransactionReceipt', params:[ txHash] })//does not have value
    console.log("receipt", transactionReceipt)
    console.log("get transaction by hash", transaction)
    const maybeNumber = web3.utils.hexToNumber(transactionReceipt.value)
    console.log('idk dude', maybeNumber)

  }
  showDonationReceipt()
}, [txHash])
  useEffect(()=>{
    async function updateReceived(receiveAmt) {
      try {
        await axios.put(`/api/campaigns/${props.match.params.id}/success`, {receiveAmt});
      } catch (err) {
        console.log(err);
      }
    }
    updateReceived(donation)
  }, [])
  return (
    <div>
      Thank you for your kind donation.

    </div>
  )
}


//steps:
/*
1.remove input amt from front end component. The user will input this amount in metamask.
2. Get the value from metamask (figure out how to decode the value). This is the amount that
will get sent to the backend and accurately reflect the amount of ether raised.

*/