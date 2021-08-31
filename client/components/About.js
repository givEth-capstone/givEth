import React from 'react';
import { Button, Container } from '@material-ui/core';
import { makeStyles, withStyles, Divider } from '@material-ui/core';
import { Typography, Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(5),
  },
  root: {
    flexGrow: 1,
  },
}));

//changing color from 'primary' to the blue in nav bar so it matches
const TypographyColor = withStyles({
  root: {
    color: '#00457C',
    fontWeight: 1000,
  },
})(Typography);

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={6} className={classes.container} m={10}>
          {/* need to vertically align header and text better */}
          <TypographyColor
            component='h1'
            variant='h3'
            align='center'
            m={10}
            spacing={2}
            // padding='6'
          >
            Why givEth?
          </TypographyColor>

          <Typography variant='body1' align='center' m={10}>
            Now more than ever, the world needs you! With givEth, we wanted to
            make it easy for anyone to give and receive Ether. givEth is
            completely anonymous, allowing users to send and receive safe,
            secure donations without the risk of exposing identities in
            sensitive situations. givEth caters to diverse needs. We make people
            our top priority.
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <img
            src='assets/paper-mache-globe-hands.jpg'
            height='100%'
            width='100%'
            align='right'
            className={classes.container}
            m={5}
          ></img>
        </Grid>
      </Grid>

      {/* middle section -- step by step */}

      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Divider style={{ width: '100%', marginTop: 50, marginBottom: 50 }} />

        <Grid item xs={4}>
          <Typography variant='h4' align='center' color='primary'>
            <img
              src='assets/install-logo.png'
              align='center'
              width='60'
              height='60'
            ></img>
          </Typography>
          <TypographyColor variant='h4' align='center'>
            Step 1
          </TypographyColor>
          <Typography variant='h5' align='center'>
            Install Metamask on your browser
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant='h4' align='center' color='primary'>
            <img
              src='assets/create-logo.png'
              align='center'
              width='60'
              height='60'
            ></img>
          </Typography>
          <TypographyColor variant='h4' align='center'>
            Step 2
          </TypographyColor>
          <Typography variant='h5' align='center'>
            Create your Campaign
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant='h4' align='center' color='primary'>
            <img
              src='assets/share-logo.png'
              align='center'
              width='60'
              height='60'
            ></img>
          </Typography>
          <TypographyColor variant='h4' align='center'>
            Step 3
          </TypographyColor>
          <Typography variant='h5' align='center'>
            Spread the word!
          </Typography>
        </Grid>
        <Divider style={{ width: '100%', marginTop: 50, marginBottom: 50 }} />
      </Grid>

      {/* bottom section -- how does it work? + button */}

      <Grid container className={classes.container} m={5} alignItems='center'>
        {/* center button horizontally */}
        <Grid item xs={6} align='center'>
          <div>
            <div>
              <img
                src='assets/MetaMask-cropped.png'
                align='right'
                height='100%'
                width='100%'
              ></img>
            </div>

            <div>
              <a href='https://metamask.io/download.html' target='_blank'>
                {/* make button color match text and nav bar */}
                <Button variant='contained'> Download MetaMask </Button>
              </a>
            </div>
          </div>
        </Grid>

        <Grid item xs={6}>
          {/* need to vertically align header and text better */}
          <TypographyColor component='h1' variant='h3' align='center'>
            How does givEth work?
          </TypographyColor>
          <Typography variant='body1' align='center'>
            givEth uses MetaMask to send and recieve Ether. Simply click on the
            link below and install MetaMask on your browser. MetaMask does all
            of the work to create an anonymous wallet for you. Once you have a
            wallet, you can connect it to a campaign you create, or use it to
            send funds to others. It's as simple as that.
          </Typography>
        </Grid>
      </Grid>

      <Divider style={{ width: '100%' }} />
    </div>
  );
}
