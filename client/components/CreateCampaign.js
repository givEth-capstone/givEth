
import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Grid, FormLabel, InputLabel, FormControl, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



export function CreateCampaign(props) {
    const { isLoggedIn } = props
    const [name, setname] = React.useState('')
    const [location, setlocation] = React.useState('')
    const [tag, setCategory] = React.useState('')
    const [info, setDescription] = React.useState('')
    const [walletId, setWalletID] = React.useState('')
    const [photoUrl, setPhotoUrl] = React.useState('https://www.pngitem.com/pimgs/m/145-1450643_providing-encouragement-and-support-to-help-people-icon.png')
    const [userId, setUserId] = React.useState(null)
    const [needed, setNeeded] = React.useState('')

    const token = window.localStorage.token;

    function onChange (evt){
        setPhotoUrl(URL.createObjectURL(evt.target.files[0]))
        console.log('here is the crazy url thing',URL.createObjectURL(evt.target.files[0]))
    }

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
        createCampaign(input, token)
    }

    async function createCampaign(body, token) {
        try {
            if (token) {
                const { data } = await axios.post(`/api/campaigns/create`, body, { headers: { authorization: token } });
                props.history.push('/campaigns');
            } else {
                props.history.push('/profile');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (

        <div>
            {!isLoggedIn ?
                <div>
                    <Redirect to='/profile'> </Redirect>
                </div>
                :
                <div>
                    <Grid container spacing={2}>
                    <Grid item xs={12} align='center'>
                    <Typography component="h2" variant="h4" align="center" color="primary" gutterBottom>
                        Create Your Cause
                    </Typography>
                    </Grid>
                    </Grid>
                    <div>
                        <Container maxWidth="sm">
                            <form onSubmit={(e) => onSubmit(e, token)}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="cause name"
                                            variant="outlined"
                                            size="small"
                                            type="text"
                                            name="name"
                                            required
                                            fullWidth
                                            label="Cause Name"
                                            onChange={(evt) => { setname(evt.target.value) }}
                                        /> 
                                    </Grid>
                                    <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        type="text"
                                        name="name"
                                        required
                                        fullWidth
                                        label="Location"
                                        onChange={(evt) => { setlocation(evt.target.value) }}
                                    />
                                    </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                    <Grid item xs={6} >
                                    <TextField 
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        type="number"
                                        name="name"
                                        required
                                        fullWidth
                                        label="Amount Needed"
                                        onChange={(evt) => { setNeeded(evt.target.value) }}
                                    />
                                    </Grid>
                                    <Grid item xs={6}>
                                    <FormLabel>
                                        Category
                                    </FormLabel>
                                    <Select
                                        onChange={(evt) => { setCategory(evt.target.value)}}
                                        name="category"
                                        id="category"
                                        required
                                        fullWidth
                                        label="Category"
                                    >
                                        <MenuItem value="select">Select</MenuItem>
                                        <MenuItem value="Arts">Arts</MenuItem>
                                        <MenuItem value="Community">Community</MenuItem>
                                        <MenuItem value="Education">Education</MenuItem>
                                        <MenuItem value="Emergency">Emergency</MenuItem>
                                        <MenuItem value="Innovation">Innovation</MenuItem>
                                        <MenuItem value="Family">Family</MenuItem>
                                        <MenuItem value="Medical">Medical</MenuItem>
                                        <MenuItem value="Housing">Housing</MenuItem>
                                        <MenuItem value="Hunger">Hunger</MenuItem>
                                    </Select>
                                    </Grid>
                                    <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        type="text"
                                        name="name"
                                        required
                                        fullWidth
                                        label="Description"
                                        onChange={(evt) => { setDescription(evt.target.value) }}
                                    />
                                    </Grid>
                                    <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                    <img src={photoUrl} width="150" height="150" />
                                    <input onChange={(evt) => onChange(evt)}
                                        type="file"
                                        id="img"
                                        accept="image/*"
                                        placeholder="upload campaign image"
                                    />
                                    </Grid>
                                    <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        type="text"
                                        name="name"
                                        required
                                        fullWidth
                                        label="Input Wallet Id"
                                        onChange={(evt) => { setWalletID(evt.target.value) }}
                                    />
                                      </Grid>
                                     </Grid>
                                    </Grid>
                                     <Grid item xs={12} align='right'>
                                    <Button variant="contained" color='primary' type="submit" >Create Cause</Button>
                                    </Grid>
                                </Grid>
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
        </div >
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
