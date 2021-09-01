
import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Grid, FormLabel, InputLabel, FormControl, TextField } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {Redirect} from 'react-router-dom';


const colortheme = createTheme({
    palette: {
      primary: { main: "#00457C", contrastText: "#000" },
      secondary: { main: "#0079C1", contrastText: "#000" },
      black: {main: "#000000", contrastText:"FFF"},
      white: "#FFFFFF",
    }
  });



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
        setPhotoUrl(evt.target.value)
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
            <ThemeProvider theme={colortheme}>
            {!isLoggedIn ?
                <div>
                    <Redirect to='/profile'> </Redirect>
                </div>
                :
                <div>
                    <Grid container>
                    <Grid item xs={12} m={6} >
                    <Typography component="h2" variant="h4" align="center" color="primary" style={{ padding: 25 }} >
                        Create Your Cause
                    </Typography>
                    </Grid>
                    </Grid>
                    <div>
                        <Container maxWidth="md">
                            <FormControl >
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
                                    <TextField
                                        required
                                        id="category"
                                        select
                                        label="Category"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(evt) => { setCategory(evt.target.value)}}
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
                                    </TextField>
                                    </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <img src={photoUrl} width="150" height="150" />
                                    <input onChange={(evt) => onChange(evt)}
                                        type="text"
                                        id="img"
                                        placeholder="upload your image URL"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        type="text"
                                        name="name"
                                        required
                                        label="Input Wallet Id"
                                        onChange={(evt) => { setWalletID(evt.target.value) }}
                                    />
                                      </Grid>

                                    <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        type="text"
                                        name="name"
                                        required
                                        fullWidth
                                        multiline
                                        rows={8}
                                        label="Description"
                                        onChange={(evt) => { setDescription(evt.target.value) }}
                                    />
                                    </Grid>

                                    <Grid container spacing={2}>
                                     </Grid>
                                    </Grid>
                                     <Grid item xs={12} align='right'>
                                    <Button 
                                    variant="contained" 
                                    color='primary' 
                                    type="submit" 
                                    style={{ color: '#FFFFFF'}}
                                    onClick={(e) => onSubmit(e, token)}
                                     >Create Cause
                                     </Button>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </Container>
                    </div>

                    <div>
                        <h4>
                            Not sure where to start? Take a look at some <Link href="/campaigns" color="primary">examples</Link> here!
                        </h4>
                    </div>
                </div>
 } </ThemeProvider>
        </div >
    )
}


const mapState = state => {
    return {
        isLoggedIn: !!state.auth.id
    }
}

export default connect(mapState, null)(CreateCampaign)
