import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Header from './component/Header/Header.component';
import HomePage from './component/Pages/HomePage/HomePage.component';
import AddPage from './component/Pages/AddPage/AddPage.component';
import HistoryPage from './component/Pages/HistoryPage/HistoryPage.component';
import StatisticsPage from './component/Pages/StatisticsPage/Statistics.component';
import SignInAndUp from './component/Pages/Sign-in-and-upPage/Sign-in-and-up.component';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  render() {
    const { match } = this.props
    return (
      <div className="App">
        <Header />
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={`${match.url}add`} component={AddPage}/>
        <Route exact path={`${match.url}history`} component={HistoryPage}/>
        <Route exact path={`${match.url}statistics`} component={StatisticsPage}/>
        <Route exact path={`${match.url}signinandup`} component={SignInAndUp}/>
      </div>
    );
  }
}

export default withRouter(App);
