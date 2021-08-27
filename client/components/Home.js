import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import { Button, Container } from '@material-ui/core';
import axios from 'axios';
//import backgroud from "./img/"

export const Home = props => {
  const [campaigns, setCampaigns] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/campaigns');
        setCampaigns(response.data);
        setSelectedCampaigns(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

// let campaignsLength = campaigns.length-1

// function getRandomInt(campaignsLength) {
//   let num1 = 0;
//   let num2 = 0;
//   let num3 = 0;
//   num1 = Math.floor(Math.random() * campaignsLength);
//   while(num1 === num2 ) {
//     num2 = Math.floor(Math.random() * campaignsLength);
//     }
//   while(num2 === num3 || num3 === num1) {
//     num3 = Math.floor(Math.random() * campaignsLength)
//   }
//   randomNums.push(num1,num2,num3)
//   }
  
//   if(campaignsLength) {
//     getRandomInt(campaignsLength);
//     console.log(randomNums)
//   }

// function random (max) {
//   let num = Math.floor(Math.random() * max);  
// }
  return (
    <div>
      <h1>Anonymous, Ethereum-based Crowdfunding</h1>

      <h2>Starting A Campaign Is Easy</h2>

      <h1>Featured Campaigns</h1>


      <h3>Get In Touch</h3>
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
