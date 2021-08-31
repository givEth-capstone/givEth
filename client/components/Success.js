import React, {useEffect} from 'react'
import axios from 'axios'
import Web3 from "web3";

import SingleCampaign from './SingleCampaign'

import { Grid } from '@material-ui/core';
//need help importing heart img.


export default function Success(props) {
  window.web3 = new Web3(window.ethereum);
  const web3 = window.web3;
  // let [donationAmt, setDonationAmt] = React.useState(0);
  // const wei = 1000000000000000000

  

  // let {txHash, accounts} = props.location.state
  // useEffect(()=> {
    
  // async function showDonationReceipt(){
    // const transaction = await window.ethereum.request({ id:accounts[0], method: 'eth_getTransactionByHash', params: [txHash] }) 
    // let donationEth = web3.utils.toBN(transaction.value)/wei.toString();
    // // returns it in wei, so we gotta get it back to ether to send to the backend. Hence the dividiing by wei.
    //  setDonationAmt(donationEth)
    //  console.log(donationAmt)
    //  updateReceived(donationEth)
//   }
//   showDonationReceipt()
// }, [txHash])

// async function updateReceived(receiveAmt) {
//   try {
//     await axios.put(`/api/campaigns/${props.match.params.id}/success`, {receiveAmt});
//   } catch (err) {
//     console.log(err);
//   }
// }
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        margin="30px"
        justifyContent="center"
      >
        <img src="/assets/heart.png" alt="heart image"/>

        <span>Thank you for your kind donation.</span>
        <span>Donation summary: {props.location.state.donationEth} ETH </span>

        <SingleCampaign id={props.match.params.id}/>
      </Grid>
    </div>
  );
}

