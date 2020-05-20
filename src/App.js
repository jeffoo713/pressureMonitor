import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'

import Header from './component/Header/Header.component';
import HomePage from './component/Pages/HomePage/HomePage.component';
import AddPage from './component/Pages/AddPage/AddPage.component';
import HistoryPage from './component/Pages/HistoryPage/HistoryPage.component';
import StatisticsPage from './component/Pages/StatisticsPage/Statistics.component';
import SignInAndUp from './component/Pages/Sign-in-and-upPage/Sign-in-and-up.component';

import { checkCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  componentDidMount() {
    const { checkCurrentUser } = this.props;
    checkCurrentUser();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/add'} component={AddPage}/>
          <Route exact path={'/history'} component={HistoryPage}/>
          <Route exact path={'/statistics'} component={StatisticsPage}/>
          <Route exact path={'/signinandup'} render={()=> currentUser? (<Redirect to='/'/>): (<SignInAndUp/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkCurrentUser: () => dispatch(checkCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
