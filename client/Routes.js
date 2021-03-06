import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect, Router} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import {me} from './store'
import Campaigns from './components/Campaigns'
import CreateCampaign from './components/CreateCampaign';
import SingleCampaign from './components/SingleCampaign'
import Profile from './components/Profile'
import history from './history'
import About from './components/About';
import Success from './components/Success'
import Loading from './components/Loading'
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/campaigns" component={Campaigns} />
        <Route exact path="/campaigns/:id" component={SingleCampaign}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/createcampaign" component={CreateCampaign}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/campaigns/:id/success" component={Success}/>
        </Router>
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
