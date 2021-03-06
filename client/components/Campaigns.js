import React, { useEffect, useState } from 'react';
import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
import Loading from './Loading.js';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const colortheme = createTheme({
  palette: {
    primary: { main: "#00457C", contrastText: "#000" },
    secondary: { main: "#0079C1", contrastText: "#000" },
    black: {main: "#000000", contrastText:"FFF"},
    white: "#FFFFFF",
  }
});
const useStyles = makeStyles(() => ({
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  container: {
    display: 'flex',
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
    padding: 20
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
    width: 400,
    height: 425,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    background: '#00C3E3',
    marginBottom: 20,
    '&:hover': {
      backgroundColor: '#00B8D8',
    }
  }
}));

export default function Campaigns() {
  const classes = useStyles();
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
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

  //hook runs on first mount to fetch all campaigns and set campaigns AND selected campaigns
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await axios.get('/api/campaigns');
        setCampaigns(response.data);
        setSelectedCampaigns(response.data);
        setLoading(false)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  //hook runs when tag changes to set selected campaigns to the correct subset, or all campaigns
  useEffect(() => {
    if (tag === 'All Campaigns') {
      setSelectedCampaigns(campaigns);
    } else {
      let selected = campaigns.filter((campaign) => campaign.tag === tag);
      setSelectedCampaigns(selected);
    }
  }, [tag]);

  return (
    <div className={classes.container}>
      <ThemeProvider theme={colortheme}>
      <div>
         {/* dropdown menu of tag options */}
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
      {/* loading component OR display of selected campaigns sorted by name */}
      <div className={classes.gridContainer}>
        {loading ? 
        (
          <Loading/>
        ):
         (
          <Grid container>
            {selectedCampaigns.sort((a, b) => a.name.localeCompare(b.name)).map((campaign) => {
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
                      />
                    </CardActionArea>
                    <CardContent className={classes.content}>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {campaign.name}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.action}>
                    <Link to={`/campaigns/${campaign.id}`}>
                       <Button variant='contained' color ='primary' style={{ color: '#FFFFFF'}}>
                        See More
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
            }
          </Grid>
        ) }
      </div>
      </ThemeProvider>
    </div>
  );
}
