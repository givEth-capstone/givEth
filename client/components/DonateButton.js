import React, {useState, useEffect} from 'react'

import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input'
import { Button } from '@material-ui/core';



const useStyles = makeStyles(() => ({
  formControl: {
    margin: 20,
    minWidth: 200,
    padding: 20,
    // position: 'absolute',
    // right: 20,
  },
}));





export default function DonateButton(props) {
  const classes = useStyles();
  const [donation, setDonation] = useState(0)
  
  useEffect(()=> {
    function showDonation(){
      console.log("donation", donation)
      console.log("recipient", props.campaign.walletId)
    }
    showDonation()
  }, [donation])
  
  async function handleDonation() {
    
    let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("wallet", props.campaign.walletId)
      //gives back an array with one object

    window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accounts[0],
            to: props.campaign.walletId,
            value: `${donation*1000000000000000000}`,
            // gasPrice: '0x09184e72a000',
            // gas: '0x2710',
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  }
  
  

  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="my-input">Donation amount</InputLabel>
        <Input 
        id="my-input" 
        aria-describedby="my-helper-text"
        onChange={(event) => { 
           setDonation(event.target.value);
        }}
        />
        <Button
          type="submit"
          variant="contained"
          color="inherit"
          onClick={handleDonation}
        >
          Donate
        </Button>
      </FormControl>
    </div>
  );
}

//game plan:

//CONNECTING TO METAMASK WALLET:
//maybe have an alert and the alert tells user to connect to wallet. if window.ethereum is true
//then go ahead and log them in. If it is false, then lead them to the metamask page.


//MAKING A TRANSACTION:
//create a input field where user can put in a number. put it on state. [x]
//refer to metamask docs https://docs.metamask.io/guide/sending-transactions.html#example
//create the object that is in the docs and hook up the method to the button.


//we get the user (person browsing) information from metamask docs https://docs.metamask.io/guide/getting-started.html#basic-considerations

//we can get their public key and that can go in the object. 

//NEW CURRENT GAME PLAN UPDATES:
//IT WORKS! YAY!!! I, AMBER, PERSONALLY HAVE TO FIGURE OUT HOW TO CONNECT MY METAMASK TO THE TESTING NETWORK. NOT WORKING
//FOR SOME STRANGE REASON. TEAM MEMBERS: I WANT YOU TO SEE IF YOU CAN CONNECT TO TESTNET AND SEND ETHER.

//MODIFYING CODE:
//FLOW: onClick -> function CHECK IF USER HAS METAMASK INSTALLED. IF THEY DO NOT HAVE IT, THEN DIRECT THEM TO THE METAMASK INSTALLATION DOCS.
// IF THEY DO HAVE IT, CHECK IF THEY ARE LOGGED IN. IF THEY ARE NOT LOGGED IN, LOG THEM IN.
// IF THEY ARE LOGGED IN, THEN DO WHAT THE CODE IS DOING (ALLOW THEM TO SEND ETHER THROUGH METAMASK)

//plan:
//click on button -> calls function that checks if metamask is there. --> calls function that checks if logged in --> calls function that allows request






// this functions but im gonna start over
//import React, {useEffect, useState} from 'react'
// // import web3 from 'web3'
// import {injected} from './Connectors'

// import { useWeb3React } from '@web3-react/core'

// import Button from '@material-ui/core/Button';

// export default function DonateButton(props) {


//   const ethereum = window.ethereum
//   if (ethereum){
//     ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void)
//   }
//   const {active, account, library, connector, activate, deactivate} = useWeb3React()
//   console.log("ethereum window", window.ethereum)

  
//   async function connect() {
//     try {
//       await activate(injected)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   let wallet = props.campaign
  
//   useEffect(()=> {
//     async function setWeb3() {
//       if (typeof web3 !== 'undefined') {
//         web3 = new Web3(web3.currentProvider);
//        } else {
//         // set the provider you want from Web3.providers
//         web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//        }
//     }
    
//   })
//   async function handleClick() {
//     const user_address = web3.eth.accounts[0];

//     try {
//       const transactionHash = await ethereum.request({
//         method: "eth_sendTransaction",
//         params: [
//           {
//             to: { wallet },
//             from: user_address,
//             value: web3.toWei("1", "ether"),
//           },
//         ],
//       });
//       // Handle the result
//       console.log(transactionHash);
//     } catch (error) {
//       console.error(error);
//     }
//   }


//   return (
//     <div>
//       <Button size="small" color="primary" onClick={connect}>
//         Donate
//       </Button>
//     </div>
//   )
// }
