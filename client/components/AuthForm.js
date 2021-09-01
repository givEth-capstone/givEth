import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'

import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => ({
  background: {
    //backgroundColor:"#00457C",
    backgroundImage: 'url("/assets/people.png")' ,
    height: '90vh',// trying to find a way for the height to take up the entire screen, but not sure.
    display: 'flex',

  },
  info: {
    borderRadius: '30px',
    height: '350px',
    width: '450px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    position: 'relative',
    boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
    opacity: '100%'

  },
  button: {
    background: '#00457C',
    marginBottom: 20,
    '&:hover': {
      backgroundColor: '#002B5E',
    },
    color: 'white'
  }

  
}));

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  const classes = useStyles();

  return (
    <div className={classes.background}>
      
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={0}
      >
        <form onSubmit={handleSubmit} name={name}>
          
            <div className={classes.info}>
              {/* user name field */}
            <div>
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <input name="username" type="text" />
            </div>

            {/* password field */}
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>

            

            {/* button */}
            <div>
              <Button className={classes.button} type="submit" variant='contained'>{displayName}</Button>
            </div>

            {props.location.pathname === "/login" ? <span>Don't have an account? <Link to='/signup'>Sign up</Link></span> : <span>Already have an account? <Link to='/login'>Log in</Link></span>}
            </div>
            


          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </Grid>
    </div>
  );
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticate(username, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
