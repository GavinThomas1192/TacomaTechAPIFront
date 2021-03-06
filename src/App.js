import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
//import { BrowserRouter as Router, Link } from 'react-router-dom'
import LandingExpansionPanel from './components/LandingExpansionPanel'
import HeaderAppBar from "./components/HeaderAppBarClass";
import {fetchAllListings} from './Actions/TechActions.js'
import LoadError from './components/LoadError';
const root = "http://www.codetacoma.xyz";
console.log(root);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true
    }
   }



async componentDidMount() {
    this.setState({loading: true}, async () => {
        await this.props.fetchAllListings()
        this.setState({loading: false})

    })
}

componentDidUpdate() {
    console.log("App updated");
}

/*
    Load category info for the "landing page" render the user will see first, also
    serves as the "home page" for the app.
    Much thanks to Gavin for getting me straightened out here and getting the listings []
    loaded properly!
 */


render() {
  const { Biz, City, EDU, Events, Group } = this.props;

  return (

      <div className="App">
          <HeaderAppBar />
          <h1>Tacoma's Tech Ecosystem</h1>
         { this.state.loading ? <LoadError/> :
          /* Render the listings if we have them */
          /* This is not the correct way, a hack for now, we should separate these into five diff components rather than passing five different props to one comp. */
        <LandingExpansionPanel
              bizList={ Biz.bizListings }
              cityList={ City.cityListings }
            //   @CHAD you need to fix this, edu is the only one with listing.. vs listings
            // Also confusion with events and event
              eduList={ EDU.edulisting }
              eventList={ Events.eventsListings }
              groupList={ Group.groupListings }
        />}
      </div>
  );
}
}

// This is where we connect to the redux store and have access to all the items in our store by mapping them from stateStore to this components Props.. Now we have access to any of this stuff through props. 
const mapStateToProps = state => ({
    Biz: state.Biz,
    City: state.City,
    EDU: state.EDU,
    Events: state.Event,
    Group: state.Group,
});

const mapDispatchToProps = dispatch => ({
  fetchAllListings: () => dispatch(fetchAllListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);