import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import {me} from './store'
import Campaigns from './components/Campaigns'
import SingleCampaign from './components/SingleCampaign'
import Profile from './components/Profile'
import CreateCampaign from './components/CreateCampaign';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/campaigns" component={Campaigns} />
        <Route exact path="/campaigns/:id" component={SingleCampaign} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/createCampaign" component={CreateCampaign}/>

        {/* route for profile */}
        {/* route for single campaign */}
        {/* route for create campaign */}

      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
