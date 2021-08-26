
import React, { useEffect, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';

export function CreateCampaign(props) {
    const {isLoggedIn} = props
    const [name, setname] = React.useState('')
    const [location, setlocation] = React.useState('')
    const [tag, setCategory] = React.useState('')
    const [info, setDescription] = React.useState('')
    const [walletId, setWalletID] = React.useState('')
    const [photoUrl, setPhotoUrl] = React.useState('https://www.pngitem.com/pimgs/m/145-1450643_providing-encouragement-and-support-to-help-people-icon.png')
    const [userId, setUserId] = React.useState(null)
    const [needed, setNeeded] = React.useState('')

    const token = window.localStorage.token;
    // console.log(window.localStorage.token);
    // console.log(name, location, tag, info, walletId);
    function onSubmit(e, token) {
        
        e.preventDefault();
        let input = {
            name,
            location,
            needed,
            tag,
            info,
            walletId, 
            photoUrl,
            userId
        }
        console.log('this is the onSubmit token', token)
        createCampaign(input, token)
    }

    //we are setting userId in handleSubmit after it's already been passed, so it never gets set. 
    //move around axios.get user 

    async function createCampaign(body, token) {
        // console.log('this is the body', body);
        try {
            if (token){
                const {data} = await axios.post(`/api/campaigns/create`, body, {headers: {authorization: token}});
                console.log(data);
                props.history.push('/campaigns');
            } else {
                props.history.push('/profile');
                console.log('token doesnt exist');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
        { !isLoggedIn ? 
        <div>
        <Redirect to ='/profile'> </Redirect>
        </div>
            :
        <div>
            <h1>Create Your Cause</h1>
            <div>
            <Container maxWidth="sm">
                <form onSubmit={(e) => onSubmit(e, token)}>
                    <div>
                        <label> Cause Name </label>
                        <input
                            type="text"
                            name="name"
                            onChange={(evt) => { setname(evt.target.value) }}
                        />
                        <label>Location</label>
                        <input
                            type="text"
                            name="name"
                            onChange={(evt) => { setlocation(evt.target.value) }}

                        />
                         <label> How much do you need to raise?</label>
                        <input
                            type="number"
                            name="name"
                            onChange={(evt) => { setNeeded(evt.target.value) }}
                        />
                        <label>Category</label>
                        <select onChange={(evt) => { setCategory(evt.target.value) }}
                            name="category" id="category">
                            <option value="select">Select</option>
                            <option value="Arts">Arts</option>
                            <option value="Community">Community</option>
                            <option value="Education">Education</option>
                            <option value="Emergency">Emergency</option>
                            <option value="Innovation">Innovation</option>
                            <option value="Family">Family</option>
                            <option value="Medical">Medical</option>
                            <option value="Housing">Housing</option>
                            <option value="Hunger">Hunger</option>
                        </select>
                        <label>Description</label>
                        <input
                            type="text"
                            name="name"
                            onChange={(evt) => { setDescription(evt.target.value) }}
                        />
                    </div>
                    <img src={photoUrl} width="150" height="150"/>
                    <input onChange={(evt) => { setPhotoUrl(evt.target.value)}}
                        type="file"
                        id="img"
                        accept="image/*"
                        placeholder="upload campaign image"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="input wallet id"
                        onChange={(evt) => { setWalletID(evt.target.value) }}
                    />
                <Button color='primary' type="submit" >Create Cause</Button>
                </form>
                </Container>
            </div>

            <div>
                <h4>
                    Not sure where to start? Take a look at some <a href="http://localhost:8080/campaigns">examples</a> here!
                </h4>
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

  export default connect(mapState, null)(CreateCampaign)
  