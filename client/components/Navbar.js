import React , {useState} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../store';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

  


const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#00457C',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:  'row',
    maxWidth: '100vw',
    alignContent: 'space-between',
    height: 80,
    zIndex: 100

  },
  img: {
    height: 60,
  },
  link: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  Bars: {
    display: 'block',
    color: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(-100%, 75%)',
    fontSize: '1.8rem',
    cursor: 'pointer'
  }
}));


const NavLinks = (props) => {
  const matches = useMediaQuery('(max-width:800px)');
 return (
  <div style={{display:'flex', flexDirection: matches ? 'column' : 'row', top:80 }}>
    {/* need help!! want it to be column when it is clicked. */}
              
              <Link to='/'>
                <Typography className={props.classes.link}>Home</Typography>
              </Link>
              <Link to='/createCampaign'>
                <Typography className={props.classes.link}>
                  Start A Campaign
                </Typography>
              </Link>
              {/*Link to Donate// Can link to All campaigns with header that says Choose a campaign to donate to */}
              <Link to='/campaigns'>
                <Typography className={props.classes.link}>Donate</Typography>
              </Link>
              <Link to='/about'>
                <Typography className={props.classes.link}>About</Typography>
              </Link>
              <Link to='/profile'>
                <Typography className={props.classes.link}>Profile</Typography>
              </Link>

              {props.loggedIn ? <a href='#' onClick={props.handleClick}>
                <Typography className={props.classes.link}>Logout</Typography>
              </a> : <> </>}

            </div>
 )
}

//style={{flexDirection: matches ? 'column' : 'row'}}

const MenuBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div >
      <MenuIcon className={props.classes.Bars} onClick={handleClick}/>
      <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}> <Link to='/'>Home</Link>  </MenuItem>
      <MenuItem onClick={handleClose}> <Link to='/createCampaign'>Start a Campaign</Link> </MenuItem>
      <MenuItem onClick={handleClose}> <Link to='/campaigns'>Donate</Link> </MenuItem>
      <MenuItem onClick={handleClose}> <Link to='/about'>About</Link> </MenuItem>
      <MenuItem onClick={handleClose}> <Link to='/profile'>Profile</Link> </MenuItem>
      {props.loggedIn && <MenuItem onClick={handleClose}> <a href='#' onClick={props.handleLogout}>Logout</a> </MenuItem>}
    </Menu>
    </div>
  )
}



const Navbar = ({ handleClick, isLoggedIn }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:800px)');
  
  
  return (
    <div>
      
      <nav className={classes.container} >
        <img className={classes.img} src='https://i.imgur.com/hPqLWJx.png'/>
        <div className={classes.navLinks}>
          
        
          {
          isLoggedIn ? 
          (
            matches ? ( <MenuBar loggedIn={true} classes={classes} handleLogout={handleClick}/> ) :
            
           <NavLinks loggedIn={true} handleClick={handleClick} classes={classes} />
          )

           : (
             matches ? (<MenuBar loggedIn={false} classes={classes}/> ) : 
            <NavLinks loggedIn={false} handleClick={handleClick} classes={classes}/>
          )
          }


        </div>
      
      </nav>

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

