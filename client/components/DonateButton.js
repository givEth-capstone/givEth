import React, {useState} from 'react'

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




// const transactionParameters = {
//   nonce: '0x00', // ignored by MetaMask
//   gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
//   gas: '0x2710', // customizable by user during MetaMask confirmation.
//   to: {props.campaign.walletId}, // Required except during contract publications.
//   from: accounts[0], // must match user's active address.
//   value: '0x00', // Only required to send ether to the recipient from the initiating external account.
//   data:
//     '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
//   chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
// };

// txHash is a hex string
// As with any RPC call, it may throw an error
// const txHash = await ethereum.request({
//   method: 'eth_sendTransaction',
//   params: [transactionParameters],
// });

export default function DonateButton(props) {
  const classes = useStyles();
  const [donation, setDonation] = useState(0)

  

  async function handleDonation() {
    
    let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("accounts",accounts)
      //gives back an array with one object

    window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accounts[0],
            to: props.campaign.walletId,
            value: `${donation}`,
            gasPrice: '0x09184e72a000',
            gas: '0x2710',
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

//game plan currently:

//CONNECTING TO METAMASK WALLET:
//maybe have an alert and the alert tells user to connect to wallet. if window.ethereum is true
//then go ahead and log them in. If it is false, then lead them to the metamask page.


//MAKING A TRANSACTION:
//create a input field where user can put in a number. put it on state. [x]
//refer to metamask docs https://docs.metamask.io/guide/sending-transactions.html#example
//create the object that is in the docs and hook up the method to the button.
//maybe get some help understading the language in the docs? I'm not too familiar with the 
// .then and .catch, would that be similar to a try catch block?

//we get the user (person browsing) information from metamask docs https://docs.metamask.io/guide/getting-started.html#basic-considerations
//ex:
//const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//const account = accounts[0];

//we can get their public key and that can go in the object. 
//docs were last updated 8/23 so hopefully this works!! GO TEAM!






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

// //find a way to get the users wallet.
