import React, {useState, useEffect} from 'react'

import {injected} from './Connectors'
import { useWeb3React } from '@web3-react/core'


import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input'
import { Button } from '@material-ui/core';

import history from '../history'



const useStyles = makeStyles(() => ({
  formControl: {
    margin: 20,
    minWidth: 200,
    padding: 20,
    
    // position: 'absolute',
    // right: 20,
  },
  input: {
    display: 'flex',
    flexGrow: 1,
    alignContent: 'row',
    margin: '10px',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  button: {
    background: '#55E9AE'
  }
}));

export default function DonateButton(props) {
  const classes = useStyles();
  const [donation, setDonation] = useState(0)
  const [transactionNumber, setTransactionNumber] = useState('')
  let accounts = []
  const {active, account, library, connector, activate, deactivate} = useWeb3React()
  
  useEffect(()=> {
    function showDonation(){
    }
    showDonation()
  }, [donation])
  
  async function getAccount() {
    try {
      accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts[0])
    } catch (error) {
      console.log(error)
    }
    if (accounts[0]){
      // console.log("account is connected")
      window.ethereum.on('accountsChanged', ()=>{console.log("account changed")})
      handleDonation()
    }else {
      alert("MetaMask account is not connected")
      connectToMetaMask()
    }
  }
  async function handleDonation() {
    window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accounts[0],
            to: props.campaign.walletId,

            value: `${donation *1000000000000000000}`,
            // gasPrice: '0x09184e72a000',
            // gas: '0x2710',
          },
        ],
      })
      .then(
        (txHash)=> {
          console.log("this is donation", typeof donation)
          console.log("this is transaction", transactionNumber)
          history.push({pathname: `/campaigns/${props.id}/success`, state:{donation, txHash}})
        })
      .catch((error) => console.error(error));
  }
  

  async function connectToMetaMask() {
    console.log("we are in the connect to meta mask function")
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.log(error);
    }
  }

  function checkMetaMask(){
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      getAccount()
    }else{
      alert("It seems like MetaMask is not installed. Please refer to the MetaMask website to install MetaMask and begin to donate!")
    }
  }
  
  

  


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="my-input">Donation amount</InputLabel>
        <div className={classes.input}>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={(event) => {
              setDonation(event.target.value);
            }}
          />
          <span>ETHER</span>
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
      </FormControl>
    </div>
  );
}
