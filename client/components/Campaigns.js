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
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    maxWidth: '100vw',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    margin: 20,
    minWidth: 200,
    padding: 20,
    minWidth: 200,
  },
  gridContainer: {
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'space-between',
    margin: 20,
    padding: 20,
    flexFlow: 'row wrap',
    spacing: 0
  },
  media: {
    height: 270,
    width: 270,
    margin: '0 auto',
  },
  message: {
    alignSelf: 'center'
  },
  root: {
    borderRadius: 12,
    width: 345,
    height: 400,
    textAlign: 'center',
    margin: 10,
  },
}));

export default function Campaigns() {
  const classes = useStyles();
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/campaigns');
        setCampaigns(response.data);
        setSelectedCampaigns(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (tag === 'All Campaigns') {
      setSelectedCampaigns(campaigns);
    } else {
      let selected = campaigns.filter((campaign) => campaign.tag === tag);
      console.log(selected);
      setSelectedCampaigns(selected);
    }
  }, [tag]);

  return (
    <div className={classes.container}>
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
      </div>

      <div className={classes.gridContainer}>
        {!selectedCampaigns.length ? (
          <h1 className={classes.message}>No Campaigns Yet!</h1>
        ) : (
          <Grid container>
            {selectedCampaigns.map((campaign) => {
              return (
                <Grid item key={campaign.id}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        alt='Campaign Image'
                        height='140'
                        className={classes.media}
                        image={campaign.photoUrl}
                        className={classes.media}
                        // title={campaign.name}
                      />
                    </CardActionArea>
                    <CardContent className={classes.content}>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {campaign.name}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.action}>
                      <Link to={`/campaigns/${campaign.id}`}>
                        <Button color='default' variant='contained'>
                          See More
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    </div>
  );
}
