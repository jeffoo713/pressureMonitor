import React from 'react';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import { compose } from 'redux';

import CustomButton from '../../Button/Button.component';

import { selectCurrentUser } from '../../../redux/user/user.selectors';

const HomePage = ({ history, match, currentUser }) => {
  const toAddPage = () => history.push(`${match.url}add`);
  const toSignIn = () => history.push(`${match.url}signinandup`);
  return(
    <div
      style={{ 
        width: '30vw',
        height: '60vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <h3>BLOOD PRESSURE MONITOR</h3>
      <div>
      {
        currentUser?
        <CustomButton handleClick={toAddPage} > START TO ADD </CustomButton>
        :
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <CustomButton handleClick={toSignIn} > SIGN IN TO START </CustomButton>
        </div>
      }
      </div>
    </div>
)};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default compose(
  withRouter,
  connect(mapStateToProps)
)(HomePage);