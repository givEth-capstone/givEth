import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import axios from 'axios';
//import background from '../../public/assets/paper-globe-hands.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    maxWidth: '100vw',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    margin: 20,
    minWidth: 200,
    padding: 20,
    minWidth: 200,
  },
  gridContainer: {
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'space-between',
    margin: 20,
    padding: 20,
    flexFlow: 'row wrap',
    spacing: 0
  },
  message: {
    alignSelf: 'center'
  },
  root: {
    maxWidth: 345,
    maxHeight: 400,
  },
  media: {
    maxHeight: 200,
  },
  sub: {
    maxWidth: 200,
    maxHeight: 200,
  },
}));


export const Home = props => {
  const [campaigns, setCampaigns] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/campaigns');
        setCampaigns(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

let random = 0 ; 
function randomFunc() {
  let newRand = Math.floor(Math.random() * campaigns.length);
  random = newRand;
}
console.log(campaigns)
randomFunc()


  return (
    // <div style = {{ backgroundImage: `url(${background})`}}>
      <div>
      <h1>Anonymous, Ethereum-based Crowdfunding</h1>

      <h2>Starting A Campaign Is Easy</h2>
      <h1>Featured Campaigns</h1>
      {!campaigns.length ? (
        <h1>No Campaigns Yet</h1>
      ) : (
        <div>
          <Grid container direction="column" alignItems="center" justifyContent="center">
          <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
            component='img'
            alt='Campaign Image'
            height='200'
            className={classes.media}
            image={campaigns[random].photoUrl}
            title={campaigns[random].name}
          />
            <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {campaigns[random].name}
            </Typography>
            <Typography variant='body2' component='p'>
              {campaigns[random].info}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/campaigns/${campaigns[random].id}`}>
              <Button size="small" color='primary' >
                See More
              </Button>
            </Link>
          </CardActions>
          </CardActionArea>
          </Card>
          </Grid>
        </div>
      )
      }
      <h1>Recently Created Campaigns</h1>
      {!campaigns.length ? (
        <h1>No recent campaigns</h1>
      ) : (
        <div>
          <Grid container direction="row" alignItems="center" justifyContent="center">
            <Card className={classes.sub}>
            <CardActionArea>
            <CardMedia
              component='img'
              alt='Campaign Image'
              height='200'
              className={classes.media}
              image={campaigns[campaigns.length-1].photoUrl}
              title={campaigns[campaigns.length-1].name}
            />
              <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {campaigns[campaigns.length-1].name}
              </Typography>
              <Typography variant='body2' component='p'>
                {campaigns[campaigns.length-1].info}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/campaigns/${campaigns[campaigns.length-1].id}`}>
                <Button size="small" color='primary' >
                  See More
                </Button>
              </Link>
            </CardActions>
            </CardActionArea>
            </Card>

            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
              component='img'
              alt='Campaign Image'
              height='200'
              className={classes.media}
              image={campaigns[campaigns.length-2].photoUrl}
              title={campaigns[campaigns.length-2].name}
            />
              <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {campaigns[campaigns.length-2].name}
              </Typography>
              <Typography variant='body2' component='p'>
                {campaigns[campaigns.length-2].info}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/campaigns/${campaigns[campaigns.length-2].id}`}>
                <Button size="small" color='primary' >
                  See More
                </Button>
              </Link>
            </CardActions>
            </CardActionArea>
            </Card>

            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
              component='img'
              alt='Campaign Image'
              height='200'
              className={classes.media}
              image={campaigns[campaigns.length-3].photoUrl}
              title={campaigns[campaigns.length-3].name}
            />
              <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {campaigns[campaigns.length-3].name}
              </Typography>
              <Typography variant='body2' component='p'>
                {campaigns[campaigns.length-3].info}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/campaigns/${campaigns[campaigns.length-3].id}`}>
                <Button size="small" color='primary' >
                  See More
                </Button>
              </Link>
            </CardActions>
            </CardActionArea>
            </Card>

          </Grid>
          <div>
            <h2>{campaigns[campaigns.length-1].name}</h2>
            <img src={campaigns[campaigns.length-1].photoUrl} width="200" height="200"/>
            <h3>{campaigns[campaigns.length-1].info}</h3>
            <h3>{campaigns[campaigns.length-1].location}</h3>
            <h3>Needed: {campaigns[campaigns.length-1].needed}</h3>
          </div>
          <div>
            <h2>{campaigns[campaigns.length-2].name}</h2>
            <img src={campaigns[campaigns.length-2].photoUrl} width="200" height="200"/>
            <h3>{campaigns[campaigns.length-2].info}</h3>
            <h3>{campaigns[campaigns.length-2].location}</h3>
            <h3>Needed: {campaigns[campaigns.length-2].needed}</h3>
          </div>
          <div>
            <h2>{campaigns[campaigns.length-3].name}</h2>
            <img src={campaigns[campaigns.length-3].photoUrl} width="200" height="200"/>
            <h3>{campaigns[campaigns.length-3].info}</h3>
            <h3>{campaigns[campaigns.length-3].location}</h3>
            <h3>Needed: {campaigns[campaigns.length-3].needed}</h3>
          </div>
        </div>
      )
    }
      
      <h3>Get In Touch</h3>
    </div>
  );
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
