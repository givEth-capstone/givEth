import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
// import {Link} from '@material-ui/core/Link'
import { logout } from '../store';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#29abe2',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    maxWidth: '100vw',
    alignContent: 'space-between',
    height: 80,
  },
  img: {
    height: 60,
    // alignItems: 'flex-start'
  },
  link: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  navLinks: {
    display: 'flex',
    // textDecoration: 'none',
    alignItems: 'center',
    // padding: '0px 10px',
    // color: "#FFFFFF"
  },
}));

const Navbar = ({ handleClick, isLoggedIn }) => {
  const classes = useStyles();
  return (
    <div>
      <nav className={classes.container}>
        <img className={classes.img} src='https://i.imgur.com/hPqLWJx.png' />
        <div className={classes.navLinks}>
          {isLoggedIn ? (
            <div>
              <Link to='/home'>
                <Typography className={classes.link}>Home</Typography>
              </Link>
              <Link to='/createCampaign'>
                <Typography className={classes.link}>
                  Create A Campaign
                </Typography>
              </Link>
              {/*Link to Donate// Can link to All campaigns with header that says Choose a campaign to donate to */}
              <Link to='/campaigns'>
                <Typography className={classes.link}>All Campaigns</Typography>
              </Link>
              <Link to='/profile'>
                <Typography className={classes.link}>Profile</Typography>
              </Link>
              <a href='#' onClick={handleClick}>
                <Typography className={classes.link}>Logout</Typography>
              </a>
            </div>
          ) : (
            <div>
              {/* Don't display logout button if not logged in! */}
              <Link to='/home'>
                <Typography className={classes.link}>Home</Typography>
              </Link>
              <Link to='/createCampaign'>
                <Typography className={classes.link}>
                  Create A Campaign
                </Typography>
              </Link>
              {/*Link to Donate// Can link to All campaigns with header that says Choose a campaign to donate to */}
              <Link to='/campaigns'>
                <Typography className={classes.link}>All Campaigns</Typography>
              </Link>
              <Link to='/profile'>
                <Typography className={classes.link}>Profile</Typography>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
