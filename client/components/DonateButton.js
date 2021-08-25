import React from 'react'

export default function DonateButton() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }
  return (
    <div>
      
    </div>
  )
}

//game plan currently:

//CONNECTING TO METAMASK WALLET:
//maybe have an alert and the alert tells user to connect to wallet. if window.ethereum is true
//then go ahead and log them in. If it is false, then lead them to the metamask page.


//MAKING A TRANSACTION:
//create a input field where user can put in a number. put it on state.
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
