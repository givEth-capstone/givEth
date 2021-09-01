import React, {useState} from 'react'

import Web3 from "web3";


import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input'
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

import history from '../history'

import axios from 'axios'


const useStyles = makeStyles(() => ({
  formControl: {
    margin: 20,
    minWidth: 200,
    padding: 20,
  },
  donate: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: 685,
    marginTop: '20px'
  },
  button: {
    background: '#55E9AE',
    width: '100%',
    '&:hover': {
      backgroundColor: '#00C1AA',
    }
  },

  btn: {
    width: '50%'
  },
  input: {
    width: '45%',
    
  }
}));

export default function DonateButton(props) {
  window.web3 = new Web3(window.ethereum);
  const web3 = window.web3;

  const wei = 1000000000000000000

  const classes = useStyles();
  const [donation, setDonation] = useState(0)
  let accounts = []
  
 
  
  async function getAccount() {
    try {
      accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.log(error)
    }
    if (accounts[0]){
      window.ethereum.on('accountsChanged', ()=>{console.log("account changed")})
      handleDonation()
      
    }else {
      alert("MetaMask account is not connected")
      connectToMetaMask()
    }
  }
  async function updateReceived(receiveAmt) {
    try {
      await axios.put(`/api/campaigns/${props.id}/success`, {receiveAmt});
    } catch (err) {
      console.log(err);
    }
  }
  async function handleDonation() {
    const amountEthToWei = await web3.utils.toHex(
    web3.utils.toWei(donation.toString(), "ether"),
  );
    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: props.campaign.walletId,
            value: amountEthToWei, //this number needs to be hex encoded and then converted to wei
          },
        ],
      })
      .then( async (txHash) => {
        const transaction = await window.ethereum.request({
          id: accounts[0],
          method: "eth_getTransactionByHash",
          params: [txHash],
        });
        let donationEth = web3.utils.toBN(transaction.value) / wei.toString();
        await updateReceived(donationEth);
        history.push({
          pathname: `/campaigns/${props.id}/success`,
          state: { txHash, accounts, donationEth },
        });
      })
      .catch((error) => console.error(error));
  }
  

  async function connectToMetaMask() {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.log(error);
    }
  }

  function checkMetaMask(){
    if (typeof window.ethereum !== 'undefined') {
      getAccount()
    }else{
      alert("It seems like MetaMask is not installed. Please refer to the MetaMask website to install MetaMask and begin to donate!")
    }
  }
  
  

  


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="my-input">Donation amount</InputLabel>
        <div className={classes.donate}>
          <div className={classes.input}>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              fullWidth
              onChange={(event) => {
                setDonation(event.target.value);
              }
            }
            endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
            />
          </div>
          <div className={classes.btn}>
          <Button
            type="submit"
            variant="contained"
            color="inherit"
            onClick={checkMetaMask}
            className={classes.button}
          >
            Donate
          </Button>
          </div>
          
        </div>
      </FormControl>
    </div>
  );
}



