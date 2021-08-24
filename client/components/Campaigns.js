import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import {Container} from 'material-ui'
import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formControl: {
    margin: 20,
    minWidth: 200,
    padding: 20,
    minWidth: 200,
    position: 'absolute',
    right: 20,
  },
  selectEmpty: {
    marginTop: 10,
  },
  gridContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Campaigns() {
  const classes = useStyles();
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaigns, setSelectedCampaigns] = useState([])
  const [tag, setTag] = useState('All Campaigns');

  const tags = [
    'All Campaigns',
    'Arts',
    'Community',
    'Education',
    'Emergency',
    'Innovation',
    'Family',
    'Medical',
    'Housing',
    'Hunger',
  ];

  useEffect(
    () => {
      async function fetchData() {
          try {
            console.log('in call');
            const response = await axios.get('/api/campaigns');
            setCampaigns(response.data);
            setSelectedCampaigns(response.data)
            console.log(campaigns);
          } catch(err) {
            console.log(err)
          } 
      }
      fetchData();
    },
    []
  );

  useEffect(
    ()=> {
      if (tag === "All Campaigns") {
        setSelectedCampaigns(campaigns)
      } else {
        let selected = campaigns.filter(campaign => campaign.tag === tag)
      console.log(selected)
      setSelectedCampaigns(selected)
      }
    }, 
    [tag]
  )

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='select-label'>
          Select a tag to view campaigns
        </InputLabel>
        <Select
          labelId='select-label'
          id='campaign-select'
          value={tag}
          onChange={(event) => {
            setTag(event.target.value);
          }}
        >
          {tags.map((tag, i) => (
            <MenuItem key={i} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div>
        {!selectedCampaigns.length ? (
          <h1>No Campaigns Yet</h1>
        ) : (
          <Grid container className={classes.gridContainer}>
            
            {selectedCampaigns.map((campaign) => {
              
              return (
                <Grid item key={campaign.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={campaign.photoUrl}
                      title={campaign.name}
                    />
                  </CardActionArea>
                  <CardActions>
                    <Button size='small' color='primary'>
                      See More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              )
              
            })}
          </Grid>
        )}
      </div>
    </div>
  );
}
