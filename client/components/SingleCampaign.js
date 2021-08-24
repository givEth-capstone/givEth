import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
  },
  media: {
    height: 280,
  },
});

export default function SingleCampaign(props) {

  const campaignID = props.match.params.id;
  const classes = useStyles();
  let [campaign, setCampaign] = React.useState([])

  useEffect(() => {
    async function getCampaign(id) {
      try {
        const response = await axios.get(`/api/campaigns/${id}`);
        console.log(response)
        const data = response.data;
        setCampaign(data)
        console.log(campaign)
      } catch (err) {
        console.log(err);
      }
    }
    getCampaign(campaignID)
  }, []);

  
  
  
  return (
    <div>
      {campaign.length < 1 ? <h1>Nothing to see.</h1>:
      <Grid container direction="column" alignItems="center" justify="center">
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={campaign.photoUrl}
          title={campaign.title}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {campaign.info}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
           {/* Amount raised: {campaign.amountRaised/campaign.needed} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Donate
        </Button>
      </CardActions>
    </Card>
      </Grid>
      
      }
    </div>
  )
}
