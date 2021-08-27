import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, } from '@material-ui/core';


export default function About() {

  return (
    <>
      <Typography variant='h4' align="left" color='textPrimary'>Why GivEth?</Typography>
      <Typography variant='body1' align='left' color='textSecondary'>Now more than ever, the world...
        We wanted to make it easy for anyone to give and receive
        diversity of need and situations.
        Not your traditional crowdfunding website
      </Typography>
   
        <img src='assets/pexels-artem-podrez-7048016.jpg' width='700' height='500'></img>
 

        <Grid container spacing={2} justify='center'>
          <Grid item>
            <Typography variant='h4'> Step 1 </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5'> Easy </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h4' align='center'> Step 2 </Typography>
            <Grid>
              <Grid item>
                <Typography variant='h5' align='center'> Easy </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h4' align='right'> Step 3 </Typography>
                <Grid>
                  <Grid item>
                    <Typography variant='h5' align='right'> Easy </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant='h3' align='left'> How does givEth work? </Typography>
            <p>givEth uses Metamask</p>
            <img src='assets/MetaMask.png' align='right'></img>
            <Button variant="contained" color='primary'>Download MetaMask</Button>
 </>

  )
}

