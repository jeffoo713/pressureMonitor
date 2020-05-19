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

import { auth, createUserProfileDocument, getUserData } from './firebase/firebase.utils';
import { updateCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.updateCurrentUser({
            id: snapshot.id, 
            ...snapshot.data()
          })
        })
        //console.log( this.props.currentUser);

        
      } else {
        this.props.updateCurrentUser(userAuth)
      }
      
    })
    
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
  updateCurrentUser: userAuth => dispatch(updateCurrentUser(userAuth))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
