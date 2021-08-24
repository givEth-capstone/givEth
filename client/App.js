import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'

import {Grid} from "@material-ui/core"

const App = () => {
  return (
    <div>
      <Navbar />
      <Grid container justify="center" alignItems="center" direction="column">
      <Routes />
    </Grid>
    </div>
    
  ) 
}

export default App
