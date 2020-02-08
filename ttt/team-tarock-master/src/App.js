import React, { Component } from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import PastEvents from './PastEvents/PastEvents'
import About from './About/About';
import Analytics from './Analytics/Analytics';
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as homeresponse from './homeResponse';
import * as eventresponse from './meetupResponse';

//const MEETUPS_URL = "https://933y46jk97.execute-api.us-east-1.amazonaws.com/Stage-1/events";
//const HOME_URL = "https://933y46jk97.execute-api.us-east-1.amazonaws.com/Stage-1/home";

class App extends Component {
  state = {homeData: {}, meetupsData: {}};

  async componentDidMount() {
    //const home_response = await axios.get(HOME_URL);
    //const meetups_response = await axios.get(MEETUPS_URL);

    this.setState({homeData: homeresponse.data});
    this.setState({meetupsData: eventresponse.data});
  }

  render() {
    return(
      <div>
        <Header headerData={this.state.homeData.navbar} />
        <>
        <Router>
          <div>
          <Route exact path="/" render={() => <Home homeData={this.state.homeData} meetupsData={this.state.meetupsData}/>}/>
          <Route path="/pastevents" render={() => <PastEvents eventsData={this.state.meetupsData}/>}/>
          <Route path="/about" render={() => <About/>}/>
          <Route path="/analytics" render={() => <Analytics/>}/>
          </div>
        </Router>
        </>
        <Footer footerData={this.state.homeData.footer} />
      </div>
    );
  }
}

export default App;