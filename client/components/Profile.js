//import isLoggedIn from User model
//import Login and Signup
//if there's no logged in User (either by checking state or local host token)
//then display <Login /> and/or <Signup />

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Login, Signup } from './AuthForm';
import { NavLink } from "react-router-dom";

export function Profile(props) {
const token = window.localStorage.token;
const {isLoggedIn} = props
let [User, setUser] = React.useState([]); //User holds campaigns associated with User and user info in key 'user'

//initial state, runs right after first render to get user obj
  useEffect(() => {
    async function fetchUser(token) {
        try{
          if(token){
            const response = await axios.get(`/api/users/campaigns`, {headers: { Authorization: token }});
            const data = response.data
            console.log("ASSOCIATED DATA", data);
            setUser(data)
            
            console.log("what is User?", User) //why is this empty?
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

    console.log("OBJECT?", User[0])
    
    const campaigns = User[0]
    console.log(campaigns)
    

    return( 
        <div>
            {User.length < 1 ? 
            <div>
                {"Please Log In or Sign Up"}
                <Login/>
                <Signup/>
            </div>  
            :
            <div>
               <h2>User: {campaigns.user.username} </h2>
               {campaigns.status ? 
               
                <div id="column">
                  <h1>-----------------------------------</h1>
                    <h2>Campaigns In Progress:</h2>
                    <h3>{campaigns.name}</h3>
                    <h3>{campaigns.location}</h3>
                    <h3>Total Needed : ${campaigns.needed}</h3>
                    <NavLink to={`/campaigns/${campaigns.id}`}>
                      <button type="button"> See More Here </button>
                    </NavLink>
                </div>
                :
                <div id="column">
                  <h1>-----------------------------------</h1>
                    <h2>Past Campaigns:</h2>
                    <h3>{campaigns.name}</h3>
                    <h3>{campaigns.location}</h3>
                    <h3>Total Needed : ${campaigns.needed}</h3>
                    {/* <h3>Total Raised: Can include in future </h3> */}
                    <NavLink to={`/campaigns/${campaigns.id}`}>
                      <button type="button"> See More Here </button>
                    </NavLink>
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
  