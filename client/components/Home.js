import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import axios from 'axios';
// import background from 'assets/paper-globe-hands.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import useStyles from '/public/styles.js';
import Paper from '@material-ui/core/Paper';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const colortheme = createTheme({
  palette: {
    primary: { main: "#00457C", contrastText: "#000" },
    secondary: { main: "#0079C1", contrastText: "#000" },
    black: {main: "#000000", contrastText:"FFF"},
    white: "#FFFFFF",
  }
});

export const Home = props => {
  const [campaigns, setCampaigns] = useState([]);
  
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
randomFunc()
const classes = useStyles();

  return (
    <div >
      <ThemeProvider theme={colortheme}>
      <Paper className={classes.titleContainer} style={{ backgroundImage: `url('assets/paper-globe-hands.jpg')` }}>
      <div className={classes.overlay}/>

      <Grid container spacing={3}>
        <Grid item >
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              GivEth
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            Anonymous, Ethereum-based Crowdfunding
            </Typography>
            <Link href="/about" color="primary">
              continue reading...
            </Link>
          </div>
        </Grid>
      </Grid>
      </Paper>

      {/* STARTING A CAMPAIGN IS EASY */}
      <div className={classes.root}>
      <Grid container spacing={3} >
      <Grid item xs={12}>
        <Typography component="h1" variant="h3" align="center" color="secondary" >
           Starting a Campaign is Easy
        </Typography>
      </Grid>

      <Grid item xs ={4}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
            <CheckCircleOutlineIcon/>
              <Typography component="h2" variant="h5">
              Step 1
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Have a cause
              </Typography>
            </CardContent>
        </Card>
        </Grid>

        <Grid item xs ={4}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
            <CheckCircleOutlineIcon/>
              <Typography component="h2" variant="h5">
                Step 2             
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Set up your account
              </Typography>
            </CardContent>
        </Card>
        </Grid>

        <Grid item xs ={4}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
            <CheckCircleOutlineIcon/>
              <Typography component="h2" variant="h5">
              Step 3
              </Typography>
              <Typography variant="subtitle1" paragraph>
              Publish your campaign
              </Typography>
            </CardContent>
        </Card>
        </Grid>
    </Grid>
    </div>
   
{/* FEATURED CAMPAIGN */}
    <Grid container spacing={3} >
    <Grid item xs={12}>
    <Typography component="h1" variant="h3" align="center" color="primary" >
        Featured Campaign
     </Typography>
    </Grid>
    </Grid>
      {!campaigns.length ? (
        <h1>No Campaigns Yet</h1>
      ) : (
        <div className={classes.root}>
          <Grid container spacing={2} justifyContent='center' >
          <Grid item xs={4} >
          <Card>
          <CardActionArea>
          <CardMedia
            component='img'
            alt='Campaign Image'
            height='250'
            className={classes.featuredImg}
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
              <Button size="small" color='primary' variant= 'contained' style={{ color: '#FFFFFF'}}>
                See More
              </Button>
            </Link>
          </CardActions>
          </CardActionArea>
          </Card>
          </Grid>
          </Grid>
        </div>
      )}



{/* MOST RECENT CAMPAIGNS */}
    <div className={classes.root}>
    <Grid container spacing={3} >
    <Grid item xs={12}>
    <Typography component="h1" variant="h3" align="center" color="secondary" >
        Most Recent Campaigns
     </Typography>
    </Grid>
    </Grid>
    </div>
      {!campaigns.length ? (
        <h1>No recent campaigns</h1>
      ) : (
        <div >
          {/* <Grid container direction="row" alignItems="center" justifyContent="center"> */}
          <Grid container spacing={2} className={classes.root}>

            <Grid item xs={4}>
            <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
              component='img'
              alt='Campaign Image'
              height='200'
              // className={classes.submedia}
              image={campaigns[campaigns.length-1].photoUrl}
              title={campaigns[campaigns.length-1].name}
            />
              <CardContent className={classes.cardContentHeight}>
              <Typography gutterBottom variant='h6' component='h3'>
                {campaigns[campaigns.length-1].name}
              </Typography>
              <Typography variant='body2' component='p' textOverflow="ellipsis">
                {campaigns[campaigns.length-1].info}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/campaigns/${campaigns[campaigns.length-1].id}`}>
                <Button size="small" color='primary' variant='contained' style={{ color: '#FFFFFF'}}>
                  See More
                </Button>
              </Link>
            </CardActions>
            </CardActionArea>
            </Card>
            </Grid>

            <Grid item xs={4}>
            <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
              component='img'
              alt='Campaign Image'
              height='200'
              className={classes.submedia}
              image={campaigns[campaigns.length-2].photoUrl}
              title={campaigns[campaigns.length-2].name}
            />
              <CardContent className={classes.cardContentHeight}>
              <Typography gutterBottom variant='h6' component='h3'>
                {campaigns[campaigns.length-2].name}
              </Typography>
              <Typography variant='body2' component='p' textOverflow="ellipsis">
                {campaigns[campaigns.length-2].info}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/campaigns/${campaigns[campaigns.length-2].id}`}>
                <Button size="small" color='primary' variant='contained' style={{ color: '#FFFFFF'}}>
                  See More
                </Button>
              </Link>
            </CardActions>
            </CardActionArea>
            </Card>
            </Grid>

            <Grid item xs={4}>
            <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
              component='img'
              alt='Campaign Image'
              height='200'
              className={classes.submedia}
              image={campaigns[campaigns.length-3].photoUrl}
              title={campaigns[campaigns.length-3].name}
            />
               <CardContent className={classes.cardContentHeight}>
              <Typography gutterBottom variant='h6' component='h3'>
                {campaigns[campaigns.length-3].name}
              </Typography>
              <Typography variant='body2' component='p' textOverflow="ellipsis">
                {campaigns[campaigns.length-3].info}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/campaigns/${campaigns[campaigns.length-3].id}`}>
                <Button size="small" variant='contained' color ='primary' style={{ color: '#FFFFFF'}}>
                  See More
                </Button>
              </Link>
            </CardActions>
            </CardActionArea>
            </Card>
            </Grid>
            </Grid>
        </div>
      )}
  </ThemeProvider>
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
