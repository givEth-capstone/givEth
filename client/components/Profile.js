//import isLoggedIn from User model
//import Login and Signup
//if there's no logged in user (either by checking state or local host token)
//then display <Login /> and/or <Signup />

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Login, Signup } from './AuthForm';

export function Profile(props) {
    const token = window.localStorage.token;
    const {isLoggedIn} = props
    let [user,setUser] = React.useState([]);

  useEffect(() => {
    async function fetchUser(token) {
        try{
          if(token){
            const response = await axios.get(`/api/users`, {headers: { Authorization: token }});
            const data = response.data
            console.log(data);
            setUser(data)
            console.log("what is user?", user)
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
      //const { name, photoUrl, username, wallet, location} = user;
     //console.log("USER HERE", user)

    return(
        <div>
            {isLoggedIn ? 
            <div>
                {"Logged in"}
            </div>
                : 
                <div>
                    {"Please Log In or Sign Up"}
                    <Login/>
                    <Signup/>
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
  