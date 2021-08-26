//import isLoggedIn from user model
//import Login and Signup
//if there's no logged in user (either by checking state or local host token)
//then display <Login /> and/or <Signup />

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Login, Signup } from './AuthForm';
import { NavLink } from "react-router-dom";

export function Profile(props) {
const token = window.localStorage.token;
const {isLoggedIn} = props
let [user, setUser] = React.useState(); 

//initial state, runs right after first render to get user obj
 useEffect( () => {
    async function fetchUser(token) {
        try{
          if(token){
            const response = await axios.get(`/api/users`, {headers: { Authorization: token }});
            const data = response.data
            console.log("RESPONSE", response)
            console.log("ASSOCIATED DATA", data);
            setUser(data)
            
            console.log("what is user?", user) //why is this empty?
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
    

   console.log("state user", user)

    // function currentCampaigns(user) {
    //     user.campaigns.map(campaign => {
    //       if(campaign.status) {
    //         console.log(campaign.status)
    //         console.log(campaign.name)
    //         const cn = campaign.name
    //       return(
    //         <p>Campaign Name: </p>
    //       );
    //       }else{
    //         return(
    //           <p key={campaign.id}>Campaign Name{campaign.name}</p>
    //         );
    //       }

    //     })
    // }

    let currentCampaigns = []
    let pastCampaigns = []

    function campaignRender (user) {
      user.campaigns.map(campaign => {
        if(campaign.status) {
          currentCampaigns.push(campaign)
        } else {
          pastCampaigns.push(campaign)
        }
      })
    }

    return( 
        <div>
            { !isLoggedIn ? 
            <div>
                {"Please Log In or Sign Up"}
                <Login/>
                <Signup/>
            </div>  
            :
            <div>
              { user ? 
                <div>
                  {/* <h2>user is Truthy </h2> */}
                  <h2>{user.username}</h2>
                  <div>{campaignRender(user)}</div>
                  <h2>Current Campaigns</h2>
                  {currentCampaigns.map ((campaigns) => {
                    return(
                      <div key={campaigns.id}>
                      <h3> Name: {campaigns.name}</h3>
                      <h4>Location: {campaigns.location}</h4>
                      <h4>Category: {campaigns.tag}</h4>
                      <h4>Amount Needed: ${campaigns.needed}</h4>
                    </div>
                    ); 
                  })}
                  <h2>Past Campaigns</h2>
                  {pastCampaigns.map ((campaigns) => {
                    return(
                      <div key={campaigns.id}>
                      <h3> Name: {campaigns.name}</h3>
                      <h4>Location: {campaigns.location}</h4>
                      <h4>Category: {campaigns.tag}</h4>
                      <h4>Amount Needed: ${campaigns.needed}</h4>
                    </div>
                    ); 
                  })}
              </div>
              :
              <div>
                <h4>User is Falsey</h4>
              </div>
              }
            </div> 
            } 
        </div>
    )
}

const mapState = state => {
    return {
      // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
      // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
      isLoggedIn: !!state.auth.id
    }
  }



  export default connect(mapState, null)(Profile)
  