
import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Grid, FormLabel, InputLabel, FormControl, TextField } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {Redirect} from 'react-router-dom'
import history from '../history'

const colortheme = createTheme({
    palette: {
        primary: { main: "#00457C", contrastText: "#000" },
        secondary: { main: "#0079C1", contrastText: "#000" },
        black: { main: "#000000", contrastText: "FFF" },
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

    function onChange(evt) {
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
                props.history.push('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (

        <div>
            <ThemeProvider theme={colortheme}>
            { (window.localStorage.token) ?  
                <div>
                    <Grid container>
                        <Grid item xs={12} m={6} >
                            <Typography component="h2" variant="h4" align="center" color="primary" style={{ padding: 25 }} >
                                Create Your Cause
                            </Typography>
                        </Grid>
                    </Grid>
                    <Container maxWidth="sm">
                        <FormControl >
                            <Grid container spacing={10}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="cause name"
                                        variant="outlined"
                                        size="small"
                                        type="text"
                                        margin="dense"
                                        name="name"
                                        required
                                        fullWidth
                                        label="Cause Name"
                                        onChange={(evt) => { setname(evt.target.value) }}
                                    />
                                    <TextField
                                        required
                                        id="outlined-basic"
                                        size="small"
                                        type="text"
                                        name="name"
                                        margin="dense"
                                        fullWidth
                                        label="Location"
                                        variant="outlined"
                                        onChange={(evt) => { setlocation(evt.target.value) }}
                                    />
                                    <TextField
                                        required
                                        id="category"
                                        select
                                        size="small"
                                        label="Category"
                                        fullWidth
                                        margin="dense"
                                        variant="outlined"
                                        onChange={(evt) => { setCategory(evt.target.value) }}
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
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        type="number"
                                        name="name"
                                        margin="dense"
                                        required
                                        fullWidth
                                        label="Amount Needed"
                                        onChange={(evt) => { evt.target.value < 0 ? (evt.target.value = 0) : setNeeded(evt.target.value) }}
                                    />
                                </Grid>
                                <Grid item xs={6} align='center'>
                                    <img src={photoUrl} width="230" height="145" />
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        margin="normal"
                                        type="text"
                                        fullWidth
                                        id="img"
                                        placeholder="Image URL"
                                        onChange={(evt) => onChange(evt)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={10}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        type="text"
                                        margin="dense"
                                        fullWidth
                                        name="name"
                                        required
                                        label="Enter Wallet ID"
                                        onChange={(evt) => { setWalletID(evt.target.value) }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        type="text"
                                        name="name"
                                        required
                                        margin="dense"
                                        fullWidth
                                        multiline
                                        rows={10}
                                        label="Description"
                                        onChange={(evt) => { setDescription(evt.target.value) }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} align='center'style={{margin: '25px'}} >
                                    <Button
                                        variant="contained"
                                        mt={3}
                                        color='primary'
                                        type="submit"
                                        style={{ color: '#FFFFFF' }}
                                        onClick={(e) => onSubmit(e, token)}
                                    >Create Cause
                                    </Button>
                                </Grid>
                                <Grid item xs={12} align='center' style={{marginBottom: '50px'}}>
                            <Typography component="h10" variant="h10" align="center">
                                Not sure where to start? Take a look at some <Link href="/campaigns" color="primary">examples</Link> here!
                            </Typography>
                        </Grid>
                            </Grid>
                        </FormControl>
                       
                    </Container>
                </div>
                : history.push({
                    pathname: `/login`
                  }) }

            </ThemeProvider>
        </div >
    )
}


const mapState = state => {
    return {
        isLoggedIn: !!state.auth.id
    }
}

export default connect(mapState, null)(CreateCampaign)
