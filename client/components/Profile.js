import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Login, Signup } from './AuthForm';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles from '/public/styles.js';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Loading from './Loading.js';

import history from '../history'

const colortheme = createTheme({
  palette: {
    primary: { main: "#00457C", contrastText: "#000" },
    secondary: { main: "#0079C1", contrastText: "#000" },
    black: {main: "#000000", contrastText:"FFF"},
    white: {main: '#FFFFFF', contrastText:"000"},
  }
});

export function Profile(props) {
  const token = window.localStorage.token;
  const {isLoggedIn} = props
  let [user, setUser] = React.useState(); 
  const classes = useStyles();
  const [selectedTab,setSelectedTab] = React.useState(1);
  const [campaigns, setCampaigns] = React.useState([])


  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }

  async function handleToggle(id, event){
    const status =  {status: event.target.checked}
      try{
        const {data} = await axios.put(`/api/campaigns/${id}`, status );
        const campaignToUpdate = data
        setCampaigns(campaigns.map((campaign) => {
          if(campaign.id === campaignToUpdate.id) {
            return campaignToUpdate
          }else{
            return campaign
          }
        }))
      }catch(err){
        console.log(err)
      }
  };
  console.log("after TOGGLE REUPDATE", campaigns)

  useEffect( () => {
    async function fetchUser(token) {
      try{
        if(token){
          const {data} = await axios.get(`/api/users`, {headers: { Authorization: token }});
          setUser(data)
          setCampaigns(data.campaigns) 
        } 
        else{
          console.log("NOT LOGGED IN", window.localStorage);
        }
      }catch(err){
          console.log(err);
      }
  }
  fetchUser(token);
      }, []);
      

    let currentCampaigns = []
    let pastCampaigns = []
    if(campaigns.length) {
      campaigns.map(campaign => {
        if(campaign.status) {
          currentCampaigns.push(campaign)
        } else {
          pastCampaigns.push(campaign)
        }
      })
    }
    return( 
        <div>
          <ThemeProvider theme={colortheme}>
            { !isLoggedIn ? 
            history.push({
              pathname: `/login`
            })
            :
            <div>
              { campaigns.length ? 
                <div>
                <Typography component="h2" variant="h5" align="center" color="primary" className={classes.message}>
                  {user.username}
                  </Typography>
                    <Tabs value = {selectedTab} onChange={handleChange} indicatorColor="secondary" textColor="primary" centered>
                      <Tab label = "Past Campaigns" />
                      <Tab label = "Active Campaigns" />
                    </Tabs>
                  {selectedTab === 1 ? 
                    currentCampaigns.length < 1 ? 
                      <div className={classes.message}>
                      <Typography component="h3" variant="h5" align="center" color="secondary" gutterBottom>
                          No Active Campaigns
                      </Typography>
                      </div>
                      :
                      currentCampaigns.map ((campaigns) => {
                        return(
                          <Grid container spacing={2} className={classes.root}>
                          <Grid item xs={4} className={classes.card}>
                          <Card key={campaigns.id}>
                          <CardActionArea>
                          <CardMedia
                            component='img'
                            alt='Campaign Image'
                            height='200'
                            className={classes.media}
                            image={campaigns.photoUrl}
                            title={campaigns.name}
                          />
                          <CardContent>
                          <Typography gutterBottom variant='h6' component='h3'>
                            {campaigns.name}
                          </Typography>
                          <Typography variant='body2' component='p' textOverflow="ellipsis">
                            {campaigns.info}
                          </Typography>
                            </CardContent>
                            <CardActions>
                              <Link to={`/campaigns/${campaigns.id}`}>
                                <Button size="small" variant='contained' color ='primary' style={{ color: '#FFFFFF'}}>
                                  See More
                                </Button>
                              </Link>
                              <FormControlLabel control={<Switch checked={campaigns.status} onChange={ e => handleToggle(campaigns.id,e)} name="active" color="primary" /> }label="Active"/>
                            </CardActions>
                            </CardActionArea>
                            </Card>
                            </Grid>
                          </Grid>
                            ); 
                          })
                      :
                      pastCampaigns.length < 1 ? 
                        <div className={classes.message}>
                          <Typography component="h3" variant="h8" align="center" color="secondary" gutterBottom>
                            No Past Campaigns
                          </Typography>
                        </div>
                        :
                        pastCampaigns.map ((campaigns) => {
                          return(
                            <Grid container spacing={2} className={classes.root}>
                              <Grid item xs={4} className={classes.card}>
                              <Card key={campaigns.id}>
                              <CardActionArea>
                                <CardMedia
                                  component='img'
                                  alt='Campaign Image'
                                  height='200'
                                  className={classes.media}
                                  image={campaigns.photoUrl}
                                  title={campaigns.name}
                                />
                                <CardContent>
                                  <Typography gutterBottom variant='h6' component='h3'>
                                    {campaigns.name}
                                  </Typography>
                                  <Typography variant='body2' component='p' textOverflow="ellipsis">
                                    {campaigns.info}
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                <Link to={`/campaigns/${campaigns.id}`}>
                                  <Button size="small" variant='contained' color ='primary' style={{ color: '#FFFFFF'}}>
                                    See More
                                  </Button>
                                </Link>
                                <FormControlLabel control={<Switch checked={campaigns.status} onChange={ e => handleToggle(campaigns.id,e)} name="inactive" color="primary" /> }label="Inactive"/>
                                </CardActions>
                              </CardActionArea>
                              </Card>
                              </Grid>
                            </Grid>
                            ); 
                          })
                      }
                </div>
                :
                <Loading/>
              }
            </div> 
          } 
          </ThemeProvider>
        </div>
    )
}

const mapState = state => {
    return {
      isLoggedIn: !!state.auth.id
    }
  }



  export default connect(mapState, null)(Profile)
  