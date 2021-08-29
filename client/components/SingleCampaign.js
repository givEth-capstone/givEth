import React, { useState, useEffect } from 'react';
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

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    // height: '80vh',
  },
  media: {
    // height: '70vh', 
    height: 400,
    width: 600,
    margin: '0 auto',
  },
  progress: {
    // width: '37.5%',
    float: 'left',
    borderRadius: '6px',
    height: '20px',
    background: '#36B8E9' /* For browsers that do not support gradients */,
    // background: '-webkit-linear-gradient(-90deg, #71F7F2, #36B8E9)', /* For Safari 5.1 to 6.0 */
    zIndex: 333,
    boxShadow:
      'inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08)',
  },
  glass: {
    width: '80%',
    height: '20px',
    borderRadius: '6px',
    background: '#ee0e0',
    float: 'left',
    overflow: 'hidden',
    backgroundColor: '#dee0e0',
    boxShadow: '0 2px 3px rgba(0,0,0,.5) inset',
  },
});

export default function SingleCampaign(props) {
  //const progress = props.campaign
  const campaignID = props.match.params.id;
  const classes = useStyles();
  let [campaign, setCampaign] = React.useState([]);
  let [width, setWidth] = useState(0);

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
    <div>
      {campaign.length < 1 ? (
        <h1>Nothing to see.</h1>
      ) : (
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Card className={classes.root}>
            <CardContent className={classes.content}>
              <Typography gutterBottom variant='h5' component='h2'>
                {campaign.name}
              </Typography>
            </CardContent>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={campaign.photoUrl}
                title={campaign.title}
              />

              <CardContent className={classes.content}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {campaign.title}
                </Typography>
                <Typography gutterBottom variant='h5' component='h2'>
                  {campaign.info}
                </Typography>
                <Typography gutterBottom variant='h5' component='h2'>
                  Goal: {campaign.needed} ETHER
                </Typography>

                <div className={classes.glass}>
                  <div
                    className={classes.progress}
                    style={{ width: `${width}%` }}
                  ></div>
                </div>

                <Typography gutterBottom variant='h5' component='h2'>
                  {/* Amount raised: {campaign.amountRaised/campaign.needed} */}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <DonateButton campaign={campaign} id={campaignID} />
            </CardActions>
          </Card>
        </Grid>
      )}
    </div>
  );
}
