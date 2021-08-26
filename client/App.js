import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'
import { Grid } from "@material-ui/core"
import { Web3ReactProvider } from '@web3-react/core'
// import Web3 from 'web3'
//** everytime I try to do anything with web3, I get that weird polyfill error!
// on stackoverflow people are suggesting to use another library :'(
  //so far it works without it, but I'm not sure how far we can get without it.

// function getLibrary(provider){
//   return new Web3(provider)
// }

const App = () => {
  return (

    // <Web3ReactProvider getLibrary={getLibrary}>
    <Web3ReactProvider>
      <div>
        <Navbar />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Routes />
        </Grid>
      </div>
    </Web3ReactProvider>
  ); 

}

export default App
