import React from 'react'
import { Button, Container } from '@material-ui/core';
import { makeStyles, Divider } from '@material-ui/core';
import { Typography, Grid, } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';



// const colortheme = createTheme({
//   palette: {
//     primary: { main: "#00457C", contrastText: "#000" },
//     secondary: { main: "#0079C1", contrastText: "#000" },
//     black: { main: "#000000", contrastText: "FFF" },
//     white: { main: '#FFFFFF', contrastText: "000" },
//   }
// });

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
  },
}))

export default function About() {

  const classes = useStyles()

  return (
    <div>
      {/* top section -- info */}
      <Grid container spacing={3}>
        <Grid item xs={6} className={classes.container}>
          <Typography component="h1" variant="h3" align="left" color="primary" gutterBottom>
            Why givEth?
          </Typography>

          <Typography variant="body1" align="left" gutterBottom>
            Now more than ever, the world needs you! With givEth, we wanted to make it easy for anyone to give and receive Ether.
            givEth is completely anonymous, making it the top choice for sending and receiving safe, secure donations without risk of exposing anyone in a potentally risky situation.
            givEth caters to diverse situations. We make people our top priority.
          </Typography>
        </Grid>

        <Grid item xs={6} >
          <img src='assets/paper-mache-globe-hands.jpg' width='550' height='350' align="right" ></img>
        </Grid>

      </Grid>

      <Divider style={{ width: '100%' }} gutterBottom />

      {/* middle section -- step by step */}

      <Grid container spacing={2} justify='center' alignItems="center">

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
        <Divider style={{ width: '1000%' }} gutterBottom />
      </Grid>

      {/* bottom section -- how does it work? + button */}

      <Grid container>
        <Grid item xs={6}>
          <Typography component="h1" variant="h3" align="left" color="primary" gutterBottom>
            How does givEth work?
          </Typography>
          <Typography variant="body1" align="left" gutterBottom>
            givEth uses MetaMask to send and recieve ether. Simply click on the link below and install MetaMask on your browser. MetaMask does all of the work to create an anonymous wallet for you. Once you have that wallet id, it's easy to copy and paste your wallet to any campaign you create. It's as simple as that.
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <img src='assets/MetaMask-cropped.png' align='right'></img>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} alignItems='flex-end'>
          <a href='https://metamask.io/download.html' target='_blank'>
            <Button variant="contained" color='primary'>Download MetaMask </Button>
          </a>
        </Grid>
      </Grid>
      <Divider style={{ width: '100%' }} />
    </div>
  )
}