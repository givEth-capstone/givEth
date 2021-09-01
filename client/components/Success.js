import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Web3 from "web3";

import SingleCampaign from './SingleCampaign'

import { Grid } from '@material-ui/core';
//need help importing heart img.


export default function Success(props) {
  window.web3 = new Web3(window.ethereum);
  const web3 = window.web3;
  
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        margin="30px"
        justifyContent="center"
      >
       
        <SingleCampaign id={props.match.params.id} donationEth={props.location.state.donationEth}/>
      </Grid>
    </div>
  );
}

