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

export default function Profile(props) {
  const token = window.localStorage.token;
  let [user, setUser] = React.useState(); 
  const classes = useStyles();
  const [selectedTab,setSelectedTab] = React.useState(1);
  const [campaigns, setCampaigns] = React.useState([])

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }


  
  const ProfileCard = (props) => {
    return (
      <div>
        
          <Grid item className={classes.card}>
            <Card key={props.campaigns.id} style={{width: 400, height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'} }>

                <CardMedia
                  component="img"
                  alt="Campaign Image"
                  height="200"
                  className={classes.media}
                  image={props.campaigns.photoUrl}
                  title={props.campaigns.name}
                />
         
                <CardContent style={{height:180}}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {props.campaigns.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.overflow}
                  >
                    {props.campaigns.info}
                  </Typography>
                </CardContent>
                <CardActionArea styles={{display: 'flex', flexDirection: 'column' , justifyContent: 'space-between'}}>
                <CardActions>
                  <Link to={`/campaigns/${props.campaigns.id}`}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      style={{ color: "#FFFFFF" }}
                    >
                      See More
                    </Button>
                  </Link>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={props.campaigns.status}
                        onChange={(e) => handleToggle(props.campaigns.id, e)}
                        name={`${props.name}`}
                        color="primary"
                      />
                    }
                    label={`${props.status}`}
                  />
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
      </div>
    );
  };
  

  async function handleToggle(id, event){
    const status =  {status: event.target.checked}
      try{
 
        const {data} = await axios.put(`/api/campaigns/${id}`, status );
        const campaignToUpdate = data
        //need explanation for what is being doing. Can we use filter instead?
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
  }
  console.log("after TOGGLE REUPDATE", campaigns)

  useEffect(() => {
    console.log("PROFILE USE EFFECT")
    async function fetchUser(token) {
      try {
        if (token) {
          const { data } = await axios.get(`/api/users`, {
            headers: { Authorization: token },
          });
          setUser(data);
          setCampaigns(data.campaigns);
          console.log("COMPLETED GET USER")
        } else {
          console.log("NOT LOGGED IN", window.localStorage);
        }
      } catch (err) {
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
            { !window.localStorage.token?
            history.push({
              pathname: `/login`
            })
            :
            <div>
              { user ? 
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
                      <Grid container className={classes.root} >
                      {currentCampaigns.map ((campaigns) => {
                        return(
                          
                          <ProfileCard campaigns={campaigns} name={"active"} status={"Active"}/>
                          
                            ); 
                          })}
                          </Grid>
                      :
                      pastCampaigns.length < 1 ? 
                        <div className={classes.message}>
                          <Typography component="h3" variant="h8" align="center" color="secondary" gutterBottom>
                            No Past Campaigns
                          </Typography>
                        </div>
                        :
                        <Grid container spacing={2} className={classes.root}>
                        {pastCampaigns.map ((campaigns) => {
                          return(
                            
                            <ProfileCard campaigns={campaigns} name={"inactive"} status={"Inactive"}/>
                            
                            ); 
                          })}
                        </Grid>
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


