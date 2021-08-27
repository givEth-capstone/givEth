import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, } from '@material-ui/core';
// import PhotoCamera from '@material-ui/icons'

// const useStyles = makeStyles(() => ({
//   action: {
//     display: 'flex',
//     justifyContent: 'space-around',
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'space-evenly',
//     flexDirection: 'row',
//     maxWidth: '100vw',
//   },
//   content: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   formControl: {
//     margin: 20,
//     minWidth: 200,
//     padding: 20,
//     minWidth: 200,
//   },
//   gridContainer: {
//     justifyContent: 'flex-start',
//     display: 'flex',
//     alignItems: 'center',
//     alignContent: 'space-between',
//     margin: 20,
//     padding: 20,
//     flexFlow: 'row wrap',
//     spacing: 0
//   },
//   media: {
//     height: 270,
//     width: 270,
//     margin: '0 auto',
//   },
//   message: {
//     alignSelf: 'center'
//   },
//   root: {
//     borderRadius: 12,
//     width: 345,
//     height: 400,
//     textAlign: 'center',
//     margin: 10,
//   },
// }));


export default function About() {
  // const classes = useStyles();


  return (

    <div>
      <Typography variant='h4' align="left" color='textPrimary'>Why GivEth?</Typography>
      <Typography variant='body1' align='left' color='textSecondary'>Now more than ever, the world...
        We wanted to make it easy for anyone to give and receive
        diversity of need and situations.
        Not your traditional crowdfunding website
      </Typography>
      <div>
        <img src='assets/pexels-artem-podrez-7048016.jpg' width='700' height='500'></img>
      </div>
      <div>
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
      </div>
    </div>
  )
}


