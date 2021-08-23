import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import web3 from 'web3'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props
  

  function handler() {
    new Promise((resolve, reject) => {
      if(window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try{
          await window.ethereum.enable();
          resolve(web3);
        }catch(error){
          reject(error)
        }
      }
      else if(window.web3) {
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      //Fallback to localhost;
      else{
        const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545')//does browser or ganache go here?
      }
    })

   }

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <button onClick = {handler()}>Connect to MetaMask</button>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
