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
  },
  selectEmpty: {
    marginTop: 10,
  },
}));

export default function Campaigns() {
  const classes = useStyles();
  const [campaigns, setCampaigns] = React.useState([]);
  const [tag, setTag] = React.useState('');
  const tags = ['Arts', 'Community', 'Education', 'Emergency', 'Innovation', 'Family', 'Medical', 'Housing', 'Hunger']
  
  // useEffect(()=> {
  //   async getCamp = () => {
  //     const campaigns = await axios.get('/api/campaigns')
  //     setCampaigns(campaigns)


  //   }
  //   getCampaigns()


  // }, [])

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='tag-select-label'>
          Select a tag to view campaigns
        </InputLabel>
        <Select
          labelId='tag-selectlabel'
          id='tag-select'
          value={tag}
          onChange={handleChange}
        >
          {tags.map((tag, i) => (
            <MenuItem key={i} value={tag}>{tag}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
