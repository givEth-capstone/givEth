import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function SingleCampaign() {

  const campaignID = this.props.match.params.id;
  const classes = useStyles();
  let [campaign, setCampaign] = React.useState([])

  useEffect(() => {
    // Update the document title using the browser API
    return async () => {
      try {
        const response = await axios.get(`/api/campaigns/${campaignID}`);
        const data = response.data;
        setCampaign(data)
      } catch (err) {
        console.log(err);
      }
    };
  });

  
  
  
  return (
    <div>
      {this.state.campaign.length < 1 ? <h1>Nothing to see.</h1>:
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={campaign.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {campaign.description}
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
      }
    </div>
  )
}
