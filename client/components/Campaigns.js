import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
// import {Container} from 'material-ui'
import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios'


const useStyles = makeStyles(() => ({
  formControl: {
    margin: 20,

    minWidth: 200,

    padding: 20,
    minWidth: 200,
    position: 'absolute',
    right: 20

  },
  selectEmpty: {
    marginTop: 10,
  },
}));

export default function Campaigns() {
  const classes = useStyles();
  const [campaigns, setCampaigns] = React.useState([]);
  const [tag, setTag] = React.useState('All Campaigns');
  const tags = ['All Campaigns', 'Arts', 'Community', 'Education', 'Emergency', 'Innovation', 'Family', 'Medical', 'Housing', 'Hunger']
  
  useEffect(async ()=> {
    console.log(tag)
    //if tag = all campaigns, or...
    const campaigns = await axios.get('/api/campaigns')
    console.log(campaigns)
   
   
    //   const campaigns = await axios.get('/api/campaigns')
    //   setCampaigns(campaigns)
    


  }, [tag])

  

  // const handleChange = (event) => {
  //   //console.log(event.target.value)
  //   setTag(event.target.value)
  //   console.log('tag, ', tag)
    
  // };

  

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label">
          Select a tag to view campaigns
        </InputLabel>
        <Select
          labelId='select-label'
          id='campaign-select'
          value={tag}
          onChange={(event)=>{
            setTag(event.target.value)
          }}
        >
          {tags.map((tag, i) => (
            <MenuItem key={i} value={tag}>{tag}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
