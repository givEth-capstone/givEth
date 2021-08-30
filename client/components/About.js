import React from 'react'
import { Button, Container } from '@material-ui/core';
import { makeStyles, Divider } from '@material-ui/core';
import { Typography, Grid, } from '@material-ui/core';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  heading: {
    backgroundColor: '#fafafa'
  },
  middle: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)'
  }
})

export default function About() {

  const classes = useStyles()

  return (
    <div>
      <Grid container />
      <Grid className={classes.heading}>
        <Typography variant='h4' align="left" color='primary'>Why GivEth?</Typography>
      </Grid>
      <Grid container spacing={2} className={classes.heading}>
        <Grid item xs={6}>
          <Typography variant='body1' align='left' color='textSecondary'> Now more than ever, the world needs you!
            With givEth, we wanted to make it easy for anyone to give and receive Ethereum. 
            GivEth is completely anonymous, making it the top choice for receiving safe and secure donations without risk of exposing anyone in a potentally risky situation.
            GivEth caters to diverse situations. We make people our top priority. 
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <img src='assets/pexels-artem-podrez-7048040.jpg' width='550' height='350' align="right"></img>
        </Grid>
        <Divider style={{ width: '100%' }} />
      </Grid>
      <Container>
        <Grid container spacing={2} justify='center' alignItems="center" className={classes.middle}>
          <Grid item xs={4}>
            <Typography variant='h4' align="center" color='primary'> Step 1 </Typography>
            <Typography variant='h5' align="center"> Install Metamask on your browser </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h4' align="center" color='primary'> Step 2 </Typography>
            <Typography variant='h5' align="center"> Create your Campaign </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h4' align="center" color='primary'> Step 3 </Typography>
            <Typography variant='h5' align="center"> Spread the word! </Typography>
          </Grid>
          <Divider style={{ width: '1000%' }} />
        </Grid>
      </Container>
      <Box m={2} pt={3}>
        <Typography variant='h3' align='left' color="primary"> How does givEth work? </Typography>
        <Typography> GivEth uses MetaMask to send and recieve ethereum. Simply click on the link below and install MetaMask on your browser. MetaMask does all of the work to create an anonymous wallet for you. Once you have that wallet id, it's easy to copy and paste your wallet to any campaign you create. As a donor, simply copy and paste a campaign's wallet id into your MetaMask wallet to send, and donate. It's as simple as that. </Typography>
      </Box>
      <img src='assets/MetaMask.png' align='right'></img>
      <Box m={2} pt={3} align='right'>
        <a href='https://metamask.io/download.html' target='_blank'>
          <Button variant="contained" color='primary'>Download MetaMask </Button>
        </a>
        <Divider style={{ width: '100%' }} />
      </Box>
    </div>
  )
}

