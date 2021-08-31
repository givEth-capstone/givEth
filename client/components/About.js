import React from 'react'
import { Button, Container } from '@material-ui/core';
import { makeStyles, Divider } from '@material-ui/core';
import { Typography, Grid, } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(5),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    palette: {
          primary: { main: "#00457C", contrastText: "#000" },
          secondary: { main: "#0079C1", contrastText: "#000" },
          black: { main: "#000000", contrastText: "FFF" },
          white: { main: '#FFFFFF', contrastText: "000" },
        }
  },
}))

export default function About() {

  const classes = useStyles()

  return (
    <div>
      {/* top section -- info */}
      <Grid container justfiy='center'>
        {/* <Box m={5}> */}
        <Grid item xs={6} className={classes.container} m={5}>
          <Typography component="h1" variant="h3" align="left" color="primary" gutterBottom mt={5}>
            Why givEth?
          </Typography>

          <Typography variant="body1" align="left" gutterBottom>
            Now more than ever, the world needs you! With givEth, we wanted to make it easy for anyone to give and receive Ether.
            givEth is completely anonymous, making it the top choice for sending and receiving safe, secure donations without risk of exposing anyone in a potentally risky situation.
            givEth caters to diverse situations. We make people our top priority.
          </Typography>
        </Grid>
        {/* </Box> */}
          {/* <Box ml={1}> */}
        <Grid item xs={6}>
          <img src='assets/paper-mache-globe-hands.jpg' width='550' height='350' align="right" gutterBottom className={classes.container} m={5}></img>
        </Grid>
         {/* </Box> */}
      </Grid>

      {/* middle section -- step by step */}

      <Grid container spacing={2} justify='center' alignItems="center">
      <Divider style={{ width: '100%', marginTop: 50, marginBottom: 50 }} />

        <Grid item xs={4}>
          <Typography variant='h4' align="center" color='primary' gutterBottom>
            <img src='assets/install-logo.png' align="center" width='60' height='60'></img>
          </Typography>
          <Typography variant='h4' align="center" color='primary' gutterBottom>
            Step 1
          </Typography>
          <Typography variant='h5' align="center" gutterBottom>
            Install Metamask on your browser
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant='h4' align="center" color='primary' gutterBottom>
            <img src='assets/create-logo.png' align="center" width='60' height='60'></img>
          </Typography>
          <Typography variant='h4' align="center" color='primary' gutterBottom>
            Step 2
          </Typography>
          <Typography variant='h5' align="center" gutterBottom>
            Create your Campaign
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant='h4' align="center" color='primary' gutterBottom>
            <img src='assets/share-logo.png' align="center" width='60' height='60'></img>
          </Typography>
          <Typography variant='h4' align="center" color='primary' gutterBottom>
            Step 3
          </Typography>
          <Typography variant='h5' align="center" gutterBottom>
            Spread the word!
          </Typography>
        </Grid>
        <Divider style={{ width: '100%', marginTop: 50, marginBottom: 50 }}  />
      </Grid>

      {/* bottom section -- how does it work? + button */}

      <Grid container className={classes.container} m={5}>
        <Grid item xs={6}>
          <Typography component="h1" variant="h3" align="left" color="primary" gutterBottom>
            How does givEth work?
          </Typography>
          <Typography variant="body1" align="left" gutterBottom>
            givEth uses MetaMask to send and recieve Ether. Simply click on the link below and install MetaMask on your browser. MetaMask does all of the work to create an anonymous wallet for you. Once you have that wallet Id, you can connect it to a campaign you create. It's as simple as that.
          </Typography>
        </Grid>
        

        <Grid item xs={6} align='right'>
          <img src='assets/MetaMask-cropped.png' align='right'></img>
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4} align='center' >
          <a href='https://metamask.io/download.html' target='_blank'>
            <Button variant="contained" color='primary'> Download MetaMask </Button>
          </a>
        </Grid>
      </Grid>
      <Divider style={{ width: '100%' }} />
    </div>
  )
}