import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'
import { Grid } from "@material-ui/core"
import { Web3ReactProvider } from '@web3-react/core'


const App = () => {
  return (
    <Web3ReactProvider>
      <div>
        <Navbar />
          <Routes />
      </div>
    </Web3ReactProvider>
  ); 

}

export default App
