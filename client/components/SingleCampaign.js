import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import DonateButton from './DonateButton';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core/LinearProgress';
import Loading from './Loading.js';

import Confetti from 'react-dom-confetti';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10px',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  media: {
    height: 400,
    width: 700,
    margin: '0 auto',
  },
  progress: {
    float: 'left',
    margin: '0 auto',
    borderRadius: '6px',
    height: '20px',
    //background: '#36B8E9' /* For browsers that do not support gradients */,
    background: '-webkit-linear-gradient(-90deg, #71F7F2, #36B8E9)',
    zIndex: 333,
    boxShadow:
      'inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08)',
  },
  info: {
    maxWidth: 700,
    textAlign: 'center'
  },
  glass: {
    width: 700,
    height: '20px',
    borderRadius: '6px',
    background: '#ee0e0',
    overflow: 'hidden',
    backgroundColor: '#dee0e0',
    boxShadow: '0 2px 3px rgba(0,0,0,.5) inset',
  },
  goal: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: 700,
    marginTop: '20px',
  },
  test: {
    alignContent: 'center',
  },
});

export default function SingleCampaign(props) {
  const campaignID = props.match ? props.match.params.id : props.id; //created this ternary bc I need to call this component in my Success function.
  const classes = useStyles();
  let [campaign, setCampaign] = React.useState([]);
  let [width, setWidth] = useState(0);
  const [confetti, setConfetti] = useState(false)

  const config = {
    angle: "155",
    spread: 360,
    startVelocity: "96",
    elementCount: "128",
    dragFriction: "0.17",
    duration: "5380",
    stagger: "5",
    width: "10px",
    height: "16px",
    perspective: "441px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a", "#00457C"]
  };

  useEffect(() => {
    setConfetti(true)
  })

  useEffect(() => {
    async function getCampaign(id) {
      try {
        const response = await axios.get(`/api/campaigns/${id}`);
        const data = response.data;
        setCampaign(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCampaign(campaignID);
  }, []);

  useEffect(() => {
    function getWidth() {
      const received = campaign.received;
      const needed = campaign.needed;
      const progress = (received / needed) * 100;
      setWidth(progress);
    }
    getWidth();
  }, [campaign]);

  return (
    <div className={classes.test}>
      {campaign.length ? (
        <Loading />
      ) : (
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
          justifyContent='center'
          spacing={0}
        >
          <Link to={`/campaigns`}>Back to All Campaigns</Link>
          <Grid item>
            <Card className={classes.content}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h3'
                  component='h2'
                  fontWeight='bold'
                >
                  {campaign.name}
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={campaign.photoUrl}
                title={campaign.title}
              />

              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {campaign.title}
                </Typography>
                <Typography gutterBottom variant='h5' component='h2' className={classes.info}>
                  {campaign.info}
                </Typography>
                {/* beginning of progress bar */}
                
                  <div className={classes.goal}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      RAISED: {campaign.received} ETH
                    </Typography>
                    <Typography gutterBottom variant='h5' component='h2'>
                      NEEDED: {campaign.needed} ETH
                    </Typography>
                  </div>

                  <div className={classes.glass}>
                    <div
                      className={classes.progress}
                      style={{ width: `${width}%` }}
                    ></div>
                  </div>
                
              </CardContent>

              {props.donationEth ? (
                <div className={classes.content}>
                  <img
                    src='/assets/heart.png'
                    alt='heart image'
                    height='50px'
                    width='50px'
                  />
                  <Confetti active={ confetti } config={ config }/>
                  <span>Thank you for your kind donation.</span>
                  <span>Donation summary: {props.donationEth} ETH </span>
                </div>
              ) : (
                <CardActions>
                  <DonateButton campaign={campaign} id={campaignID} />
                </CardActions>
              )}
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
