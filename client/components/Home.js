import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import { Button, Container } from '@material-ui/core';
import axios from 'axios';


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

let campaignsLength = campaigns.length-1

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

if(campaignsLength){
let num = Math.floor(Math.random() * campaignsLength);
return num
}
  return (
    <div>
      <h1>GivEth</h1>
      <h1>FEATURED CAMPAIGNS</h1>
      
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
