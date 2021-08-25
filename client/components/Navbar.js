import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>givEth</h1>
    <nav>
        {isLoggedIn ?
        <div>
        <Link to="/home">Home</Link>
        <Link to="/createCampaign">Create A Campaign</Link>
        {/*Link to Donate// Can link to All campaigns with header that says Choose a campaign to donate to */}
        <Link to="/campaigns">All Campaigns</Link>
        <Link to="/profile">Profile</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
        </div>
          :
        <div> 
          {/* Don't display logout button if not logged in! */}
        <Link to="/home">Home</Link>
        <Link to="/createCampaign">Create A Campaign</Link>
        {/*Link to Donate// Can link to All campaigns with header that says Choose a campaign to donate to */}
        <Link to="/campaigns">All Campaigns</Link>
        <Link to="/profile">Profile</Link>
        </div>
        }
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
