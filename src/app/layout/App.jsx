import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import homePage from '../../features/home/homePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import EventForm from '../../features/event/EventForm/EventForm';

class App extends Component {

  render() {
    return (
      <Fragment>
        <NavBar />
          <Container className="main">
            <Route exact path='/' component={ homePage } />
            <Route path='/events' component={ EventDashboard } />
            <Route path='/events/:id' component={ EventDetailedPage } />
            <Route path='/people' component={ PeopleDashboard } />
            <Route path='/profile/:id' component={ UserDetailedPage } />
            <Route path='/settings' component={ SettingsDashboard } />
            <Route path='/createEvent' component={ EventForm } />
          </Container>
      </Fragment>
    );
  }
}

export default App;
