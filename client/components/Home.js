import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import { Button, Container } from '@material-ui/core';


/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props
  
  return (
    <div>
      <h2>HOME</h2>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
