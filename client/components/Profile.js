//import isLoggedIn from User model
//import Login and Signup
//if there's no logged in User (either by checking state or local host token)
//then display <Login /> and/or <Signup />

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Login, Signup } from './AuthForm';

export function Profile(props) {
const token = window.localStorage.token;
const {isLoggedIn} = props
let [User,setUser] = React.useState([]);

  useEffect(() => {
    async function fetchUser(token) {
        try{
          if(token){
            const response = await axios.get(`/api/users`, {headers: { Authorization: token }});
            const data = response.data
            console.log(data);
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


    const onFieldChange = (field, value) => {
        setUser({
          ...User,
          [field]: value
        });
      }
    const onImageChange = (field, file) => {
        if (file && file[0]) {
            setUser( {...User,
                [field]: (URL.createObjectURL(file[0]))
            });
        }
    }
       

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
                <div id="column">
                    <img src={User.photoUrl}/>
                    <input name = "photoUrl" type="file" onChange={ ({target:{name, file}}) => {onImageChange(file,name )} } className="filetype" />
                </div>
                <div id="column">
                    <h3>Name :</h3>
                    <input name = "name" value = {User.name} onChange={({target:{name,value}}) => onFieldChange(name,value)} />
                    <h3>Username :</h3>
                    <input name = "username" value = {User.username} onChange={({target:{name,value}}) => onFieldChange(name,value)} />
                    <h3>Wallet Address :</h3>
                    <input name = "wallet" value = {User.wallet} onChange={({target:{name,value}}) => onFieldChange(name,value)} />
                    <h3>Location : </h3> 
                    <input name = "location" value = {User.location} onChange={({target:{name,value}}) => onFieldChange(name,value)} />
                </div>
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
  